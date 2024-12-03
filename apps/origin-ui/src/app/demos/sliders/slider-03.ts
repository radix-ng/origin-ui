import {Component} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";
import {OriLabel} from "@origin-ui/components/label";


@Component({
    selector: "demo-slider-03",
    standalone: true,
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with square thumb</ori-label>
            <ori-slider [defaultValue]="[25]" [step]="10" class="[&_*_rdx-slider-thumb]:rounded"
                        aria-label="Slider with square thumb"/>
        </div>
    `
})
export default class Slider03Component {}
