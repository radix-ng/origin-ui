import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSlider } from '~/registry/ui/slider';

@Component({
    selector: 'demo-slider-01',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <label oriLabel>Simple slider</label>
            <ori-slider [defaultValue]="[25]" aria-label="Simple slider" />
        </div>
    `
})
export default class Slider01Component {}
