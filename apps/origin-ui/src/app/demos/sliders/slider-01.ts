import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-01',
    standalone: true,
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Simple slider</ori-label>
            <ori-slider [defaultValue]="[25]" aria-label="Simple slider" />
        </div>
    `
})
export default class Slider01Component {}
