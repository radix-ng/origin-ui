import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input, OnInit, signal, viewChild, ViewContainerRef } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { firstValueFrom } from 'rxjs';
import { CodeBlockComponent } from './code-block.component';
import { ComponentDetailsComponent } from './component-details.component';
import { CopyButtonComponent } from './copy-button.component';

@Component({
    selector: 'app-demo-component',
    imports: [ComponentDetailsComponent, CodeBlockComponent, CopyButtonComponent],
    template: `
        <ng-container #container></ng-container>

        <div class="absolute right-2 top-2 flex gap-2">
            <app-component-details>
                <div class="relative">
                    <app-code-block [sourceCode]="sourceCode()" />
                    <app-demo-copy-button [componentSource]="sourceCode()" />
                </div>
            </app-component-details>
        </div>
    `,
    host: {
        '[class]': 'computedClass()'
    }
})
export class DemoComponent implements OnInit {
    private readonly http = inject(HttpClient);

    readonly directory = input<string>();
    readonly componentName = input<string>();
    readonly class = input<string>();

    readonly computedClass = computed(() => cn('group/item relative', this.class()));

    private readonly container = viewChild.required('container', { read: ViewContainerRef });

    protected readonly sourceCode = signal('');

    async ngOnInit() {
        const { default: ComponentModule } = await import(`../../registry/components/${this.directory()}/${this.componentName()}.ts`);

        if (!ComponentModule) {
            console.error('Component not found:', this.componentName());
            return;
        }

        this.container().createComponent(ComponentModule);

        try {
            let code = await this.fetchSourceCode();

            code = code.replace(/import\s+.*\s+from\s+['"]~\/registry\/ui.*['"]/g, match => {
                return match.replace('~/registry/ui', '@origin-ui/components');
            });

            code = code.replace(/import\s+.*\s+from\s+['"]~\/registry\/lib\/utils.*['"]/g, match => {
                return match.replace('~/registry/lib/utils', '@origin-ui/components/utils');
            });

            this.sourceCode.set(code);
        } catch (error) {
            console.error('Error fetching source code:', error);
        }
    }

    private async fetchSourceCode(): Promise<string> {
        const filePath = `/demos/${this.directory()}/${this.componentName()}.ts`;
        return firstValueFrom(this.http.get(filePath, { responseType: 'text' }));
    }
}
