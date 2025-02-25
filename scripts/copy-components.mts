import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Project } from 'ts-morph';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '../packages/components');
const destinationDir = path.join(__dirname, '../apps/origin-ui/src/registry/default/ui');

const ignoreDirs = ['utils'];

function getNewFileName(filePath: string): string {
    return filePath.replace(/\.component\.ts$|\.directive\.ts$/, '.ts');
}

async function copyAndModifyFile(src: string, dest: string) {
    const newDest = getNewFileName(dest);
    await fs.copyFile(src, newDest);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(newDest);

    sourceFile.getImportDeclarations().forEach(importDeclaration => {
        const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
        if (moduleSpecifier === '@origin-ui/components/utils') {
            importDeclaration.setModuleSpecifier('~/registry/default/lib/utils');
        } else if (moduleSpecifier.startsWith('./')) {
            importDeclaration.setModuleSpecifier(moduleSpecifier.replace('./', '~/registry/default/ui/'));
        } else if (moduleSpecifier.startsWith('@origin-ui/components')) {
            importDeclaration.setModuleSpecifier(moduleSpecifier.replace('@origin-ui/components', '~/registry/default/ui'));
        }
    });

    await sourceFile.save();
}

async function copyDirectory(src: string, dest: string) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else {
            await copyAndModifyFile(srcPath, destPath);
        }
    }
}

async function deleteDirectory(dir: string) {
    try {
        await fs.rm(dir, { recursive: true, force: true });
        console.log(`Deleted directory: ${dir}`);
    } catch (err) {
        console.error(`Error deleting directory ${dir}:`, err);
    }
}

async function copyComponents() {
    await deleteDirectory(destinationDir);

    const components = await fs.readdir(componentsDir, { withFileTypes: true });

    for (const component of components) {
        if (component.isDirectory() && !ignoreDirs.includes(component.name)) {
            const srcPath = path.join(componentsDir, component.name, 'src');
            const destPath = path.join(destinationDir);

            await copyDirectory(srcPath, destPath);
            console.log(`Copied and modified ${component.name} to ${destPath}`);
        }
    }
}

copyComponents().catch(console.error);
