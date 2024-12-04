import {Component} from "@angular/core";
import {AppPageHeaderComponent} from "../../components/page-header.component";
import {DemoComponent} from "../../components/demo-component";

@Component({
    selector: 'app-page-inputs',
    standalone: true,
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Select">
                        A growing collection of {{ files.length }} select components built with Angular and TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                        @for (componentName of files; track componentName) {
                            <app-demo-component
                                directory="selects"
                                [componentName]="componentName"/>
                        }
                    </div>

                </div>
            </div>
        </main>

    `
})
export default class PageSlidersComponent {
    files = [
        "select-01",
        "select-06",
        "select-11",
        "select-13",
    ];
}
