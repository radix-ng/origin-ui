import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSlider } from '~/registry/ui/slider';

@Component({
    selector: 'demo-slider-03',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <label oriLabel>Slider with square thumb</label>
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
