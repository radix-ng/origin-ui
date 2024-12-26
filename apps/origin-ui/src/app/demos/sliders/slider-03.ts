import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-03',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with square thumb</ori-label>
            <ori-slider
                class="[&_*_rdx-slider-thumb]:rounded"
                [defaultValue]="[25]"
                [step]="10"
                aria-label="Slider with square thumb"
            />
        </div>
    `
})
export default class Slider03Component {}
