import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSlider } from '~/registry/ui/slider';

@Component({
    selector: 'demo-slider-11',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <label oriLabel>Dual range slider</label>
            <ori-slider [defaultValue]="[25, 75]" [step]="10" aria-label="Dual range slider" />
        </div>
    `
})
export default class Slider11Component {}
