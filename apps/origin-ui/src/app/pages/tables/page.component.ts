import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-sliders',
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Table">
                        A growing collection of {{ files.length }} table components built with Angular and TailwindCSS.
                    </app-components-page-header>

                    <div class="overflow-hidden">
                        <div
                            class="*:not-first:-ms-px *:not-first:-mt-px -m-px grid grid-cols-12 *:px-1 *:py-12 sm:*:px-8 xl:*:px-12"
                        >
                            @defer {
                                @for (componentName of files; track componentName) {
                                    <app-demo-component
                                        class="col-span-12 border-[0.5px] has-[[data-comp-loading=true]]:border-none sm:col-span-12 lg:col-span-12"
                                        [componentName]="componentName"
                                        directory="tables"
                                    />
                                }
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageSlidersComponent {
    files = [
        'table-01',
        'table-03',
        'table-09',
        'table-11',
        'table-12',
        'table-14',
        'table-17'
    ];
}
