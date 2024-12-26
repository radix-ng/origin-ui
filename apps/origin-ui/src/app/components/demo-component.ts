import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CopyButtonComponent } from './copy-button.component';

@Component({
    selector: 'app-demo-component',
    imports: [CopyButtonComponent],
    template: `
        <ng-container #container></ng-container>

        <app-demo-copy-button [componentSource]="sourceCode" />
    `,
    host: {
        '[class]': 'computedClass'
    }
})
export class DemoComponent implements OnInit {
    private readonly http = inject(HttpClient);

    @Input() directory!: string;
    @Input() componentName!: string;
    @Input() className: string = '';

    @ViewChild('container', { read: ViewContainerRef, static: true })
    private container!: ViewContainerRef;

    computedClass: string = '';
    sourceCode: string | null = null;

    async ngOnInit() {
        this.computedClass = `group/item relative ${this.className}`;

        const { default: ComponentModule } = await import(`../demos/${this.directory}/${this.componentName}.ts`);

        if (!ComponentModule) {
            console.error('Component not found:', this.componentName);
            return;
        }

        this.container.createComponent(ComponentModule);

        try {
            this.sourceCode = await this.fetchSourceCode();
        } catch (error) {
            console.error('Error fetching source code:', error);
        }
    }

    private async fetchSourceCode(): Promise<string> {
        const filePath = `/demos/${this.directory}/${this.componentName}.ts`;
        return firstValueFrom(this.http.get(filePath, { responseType: 'text' }));
    }
}
