import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-05',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <label oriLabel>Slider with tiny thumb</label>
            <ori-slider
                class="[&_*_rdx-slider-thumb]:border-background [&_*_rdx-slider-thumb]:bg-primary [&_*_rdx-slider-thumb]:h-6 [&_*_rdx-slider-thumb]:w-2.5 [&_*_rdx-slider-thumb]:border-[3px] [&_*_rdx-slider-thumb]:ring-offset-0"
                [defaultValue]="[25]"
                aria-label="Slider with tiny thumb"
            />
        </div>
    `
})
export default class Slider05Component {}
