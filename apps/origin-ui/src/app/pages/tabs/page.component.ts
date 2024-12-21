import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-tabs',
    standalone: true,
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Tab">
                        A growing collection of {{ files.length }} tab components built with Angular and TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @for (componentName of files; track componentName) {
                            <app-demo-component
                                [componentName]="componentName"
                                directory="tabs"
                                className="text-center"
                            />
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageTabsComponent {
    files = [
        'tab-01',
        'tab-04',
        'tab-06',
        'tab-07',
        'tab-08',
        'tab-17'
    ];
}
