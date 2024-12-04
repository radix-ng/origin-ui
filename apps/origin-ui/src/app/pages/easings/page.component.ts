import {Component} from "@angular/core";
import {AppPageHeaderComponent} from "../../components/page-header.component";
import {DemoComponent} from "../../components/demo-component";
import {OriLabel} from "@origin-ui/components/label";

@Component({
    selector: 'app-page-easings',
    standalone: true,
    imports: [AppPageHeaderComponent, OriLabel],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Tailwind CSS easing classes">
                        A set of easing functions ready to copy and paste into your Tailwind CSS project.
                    </app-components-page-header>
<!--Easing-->
                    <div class="mb-12 space-y-6">
            <div class="top-0 z-10 bg-background/95 py-4 backdrop-blur-lg md:sticky">
                <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div class="flex flex-col gap-2">
                        <ori-label>Duration</ori-label>
                        <div class="flex items-center gap-4">
                            Slider
                            Input
                            <span class="text-sm text-muted-foreground">ms</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="flex flex-col gap-2">
                            <ori-label>Filter</ori-label>
                            Select
                        </div>

                        <div class="flex flex-col gap-2">
                            <ori-label>Animation type</ori-label>
                            Select

                        </div>
                    </div>
                </div>
            </div>

            <div
                id="grid"
                class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(2n-1)]:sm:col-span-2 [&>*:last-child:nth-child(3n-1)]:lg:col-start-2 [&>*:last-child:nth-child(3n-2)]:lg:col-span-3"
            >
            </div>
        </div>
<!--end-->
                </div>
            </div>
        </main>
    `
})
export default class PageEasingsComponent {

}
