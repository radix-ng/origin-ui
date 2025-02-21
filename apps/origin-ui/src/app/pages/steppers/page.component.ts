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
                    <app-components-page-header title="Stepper">
                        A growing collection of {{ files.length }} stepper components built with Angular and
                        TailwindCSS.
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
                                        directory="steppers"
                                    />
                                }
                            }

                            @defer {
                                @for (componentName of filesVertical; track componentName) {
                                    <app-demo-component
                                        class="col-span-12 border-[0.5px] has-[[data-comp-loading=true]]:border-none sm:col-span-6 lg:col-span-6"
                                        [componentName]="componentName"
                                        directory="steppers"
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
        'stepper-01',
        'stepper-05'
    ];

    filesVertical = [
        'stepper-14',
        'stepper-15'
    ];
}
