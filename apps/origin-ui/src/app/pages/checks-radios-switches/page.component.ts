import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-buttons',
    standalone: true,
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Checkbox, Radio, and Switch">
                        A growing collection of {{ totalComponents }} checkbox, radio and switch components built with
                        Angular and TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @for (componentName of checkboxFiles; track componentName) {
                            <app-demo-component
                                [directory]="checkboxDir"
                                [componentName]="componentName"
                                className="text-center"
                            ></app-demo-component>
                        }

                        @for (componentName of radioFiles; track componentName) {
                            <app-demo-component
                                [directory]="radiosDir"
                                [componentName]="componentName"
                                className="text-center"
                            ></app-demo-component>
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageButtonsComponent {
    checkboxDir = 'checkboxes';
    checkboxFiles = [
        'checkbox-01',
        'checkbox-02',
        'checkbox-03',
        'checkbox-04'
    ];

    radiosDir = 'radios';
    radioFiles = ['radio-01'];

    totalComponents = this.checkboxFiles.length + this.radioFiles.length;
}
