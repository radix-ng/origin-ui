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
                    <app-components-page-header title="Dropdown and Popover">
                        A growing collection of {{ totalComponents }} dropdown menu and popover components built with
                        Angular and TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @for (componentName of popoverFiles; track componentName) {
                            <app-demo-component
                                [directory]="popoverDir"
                                [componentName]="componentName"
                                className="flex items-start justify-center"
                            ></app-demo-component>
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageButtonsComponent {
    popoverDir = 'popovers';
    popoverFiles = [
        'popover-01',
        'popover-05'
    ];

    totalComponents = this.popoverFiles.length;
}
