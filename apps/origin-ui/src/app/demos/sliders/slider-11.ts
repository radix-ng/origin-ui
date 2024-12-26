import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-11',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Dual range slider</ori-label>
            <ori-slider [defaultValue]="[25, 75]" [step]="10" aria-label="Dual range slider" />
        </div>
    `
})
export default class Slider11Component {}
