import {Component} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";
import {OriLabel} from "@origin-ui/components/label";


@Component({
    selector: "demo-slider-04",
    standalone: true,
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with solid thumb</ori-label>
            <ori-slider [defaultValue]="[25]"
                        class="[&_*_rdx-slider-thumb]:bg-primary [&_*_rdx-slider-range]:opacity-70"
                        aria-label="Slider with solid thumb"/>
        </div>
    `
})
export default class Slider04Component {}
