import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-inputs',
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Input and Textarea">
                        A growing collection of {{ files.length }} input and textarea components built with Angular and
                        TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @defer {
                            @for (item of files; track item) {
                                <app-demo-component [componentName]="item" directory="inputs" />
                            }

                            @for (item of textareaFiles; track item) {
                                <app-demo-component [componentName]="item" directory="textareas" />
                            }
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageInputsComponent {
    files = [
        'input-01',
        'input-02',
        'input-03',
        // "input-04",
        // "input-05",
        'input-08',
        'input-14',
        'input-17',
        'input-20',
        'input-23',
        'input-24',
        'input-35',
        'input-51'
    ];

    textareaFiles = [
        'textarea-59',
        'textarea-67',
        'textarea-68',
        'textarea-77'
    ];
}
