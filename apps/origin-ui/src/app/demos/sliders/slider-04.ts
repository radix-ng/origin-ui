import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-04',
    standalone: true,
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with solid thumb</ori-label>
            <ori-slider
                class="[&_*_rdx-slider-thumb]:bg-primary [&_*_rdx-slider-range]:opacity-70"
                [defaultValue]="[25]"
                aria-label="Slider with solid thumb"
            />
        </div>
    `
})
export default class Slider04Component {}
