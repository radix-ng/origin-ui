import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-buttons',
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Switch">
                        A growing collection of {{ totalComponents }} switch components built with Angular and
                        TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @defer {
                            @for (componentName of files; track componentName) {
                                <app-demo-component
                                    class="text-center"
                                    [directory]="dir"
                                    [componentName]="componentName"
                                ></app-demo-component>
                            }
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageButtonsComponent {
    dir = 'switchs';
    files = [
        'switch-01',
        'switch-02',
        'switch-03',
        'switch-04',
        'switch-05',
        'switch-06'
    ];

    totalComponents = this.files.length;
}
