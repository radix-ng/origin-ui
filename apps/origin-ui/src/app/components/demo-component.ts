import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal, viewChild, ViewContainerRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ComponentDetailsComponent } from './component-details.component';

@Component({
    selector: 'app-demo-component',
    imports: [ComponentDetailsComponent],
    template: `
        <ng-container #container></ng-container>

        <div class="absolute right-2 top-2 flex gap-2">
            <app-component-details [sourceCode]="sourceCode()" [name]="componentName()!" />
        </div>
    `
})
export class DemoComponent implements OnInit {
    private readonly http = inject(HttpClient);

    readonly slug = input<string>();
    readonly componentName = input<string>();

    private readonly container = viewChild.required('container', { read: ViewContainerRef });

    protected readonly sourceCode = signal('');

    async ngOnInit() {
        let slug = `${this.slug()}s`;

        if (this.slug() == 'checkbox') {
            slug = 'checkboxes';
        }

        if (this.slug() == 'tabs') {
            slug = 'tabs';
        }

        const { default: ComponentModule } = await import(
            `../../registry/default/components/${slug}/${this.componentName()}.ts`
        );

        if (!ComponentModule) {
            console.error('Component not found:', this.componentName());
            return;
        }

        this.container().createComponent(ComponentModule);

        try {
            const code = await this.fetchSourceCode();

            this.sourceCode.set(code);
        } catch (error) {
            console.error('Error fetching source code:', error);
        }
    }

    private async fetchSourceCode(): Promise<string> {
        let slug = `${this.slug()}s`;

        if (this.slug() == 'checkbox') {
            slug = 'checkboxes';
        }

        if (this.slug() == 'tabs') {
            slug = 'tabs';
        }

        const filePath = `/demos/${slug}/${this.componentName()}.ts`;

        return firstValueFrom(this.http.get(filePath, { responseType: 'text' }));
    }
}
