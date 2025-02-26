import { Component, computed, input } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriDialogComponent,
    OriDialogDescription,
    OriDialogHeader,
    OriDialogTitle,
    OriDialogTriggerDirective
} from '@origin-ui/components/dialog';
import { Code, LucideAngularModule } from 'lucide-angular';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '~/registry/default/ui/tabs';
import { CliCommandsComponent } from './cli-commands.component';
import { CodeBlockComponent } from './code-block.component';
import { CopyButtonComponent } from './copy-button.component';

@Component({
    selector: 'app-component-details',
    imports: [
        OriDialogComponent,
        OriDialogHeader,
        OriDialogTriggerDirective,
        OriDialogDescription,
        OriDialogTitle,
        OriButton,
        LucideAngularModule,
        CodeBlockComponent,
        CopyButtonComponent,
        OriTabs,
        OriTabsList,
        OriTabsTrigger,
        OriTabsContent,
        CliCommandsComponent
    ],
    template: `
        <button
            class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
            [oriDialogTrigger]="dialog"
            oriButton
            variant="ghost"
            size="icon"
        >
            <lucide-angular [img]="Code" size="16" strokeWidth="2" aria-hidden="true" />
        </button>

        <ng-template #dialog>
            <ori-dialog-content class="sm:max-w-[600px]">
                <ori-tabs class="sm:max-w-[550px]">
                    <ori-tabs-list class="border-border h-auto rounded-none border-b bg-transparent p-0">
                        <ori-tabs-trigger
                            class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                            value="shadcn-ng"
                        >
                            shadcn-ng/cli
                        </ori-tabs-trigger>
                        <ori-tabs-trigger
                            class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                            value="package"
                        >
                            NPM Package
                        </ori-tabs-trigger>
                    </ori-tabs-list>
                    <ori-tabs-content value="shadcn-ng">
                        <ori-dialog-header class="space-y-4">
                            <h2 class="pb-3 pt-3 text-left" oriDialogTitle>Installation</h2>
                            <ori-dialog-description class="sr-only">
                                Use the CLI to add components to your project
                            </ori-dialog-description>
                        </ori-dialog-header>
                        <div class="min-w-0 space-y-5">
                            <cli-commands [name]="name()" />
                            <div class="space-y-4">
                                <p class="text-lg font-semibold tracking-tight">Code</p>
                                <div class="relative">
                                    <app-code-block [sourceCode]="sourceCodeWithShadcnNg()" />
                                    <app-demo-copy-button [componentSource]="sourceCodeWithShadcnNg()" />
                                </div>
                            </div>
                        </div>
                    </ori-tabs-content>

                    <ori-tabs-content value="package">
                        <ori-dialog-header>
                            <!--<ori-dialog-title class="text-left">Installation</ori-dialog-title>-->
                            <ori-dialog-description class="sr-only">
                                Use the CLI to add components to your project
                            </ori-dialog-description>
                        </ori-dialog-header>
                        <div class="min-w-0 space-y-5">
                            <div class="space-y-4 pt-3">
                                <p class="text-lg font-semibold tracking-tight">Code</p>
                                <div class="relative">
                                    <app-code-block [sourceCode]="sourceCodeWithPackage()" />
                                    <app-demo-copy-button [componentSource]="sourceCodeWithPackage()" />
                                </div>
                            </div>
                        </div>
                    </ori-tabs-content>
                </ori-tabs>
            </ori-dialog-content>
        </ng-template>
    `
})
export class ComponentDetailsComponent {
    protected readonly Code = Code;
    sourceCode = input.required<string>();
    name = input.required<string>();

    protected readonly sourceCodeWithPackage = computed(() => {
        let code = this.sourceCode();

        code = code.replace(/import\s+[\s\S]*?\s+from\s+['"]~\/registry\/default\/ui.*['"]/g, (match) => {
            return match.replace('~/registry/default/ui', '@origin-ui/components');
        });

        code = code.replace(/import\s+[\s\S]*?\s+from\s+['"]~\/registry\/default\/lib\/utils.*['"]/g, (match) => {
            return match.replace('~/registry/default/lib/utils', '@origin-ui/components/utils');
        });

        return code;
    });

    protected readonly sourceCodeWithShadcnNg = computed(() => {
        return this.sourceCode()
            .replace(/~\/registry\/default\/ui/g, '~/components/ui')
            .replace(/~\/registry\/default\/services/g, '~/services')
            .replace(/~\/registry\/default\/lib/g, '~/lib');
    });
}
