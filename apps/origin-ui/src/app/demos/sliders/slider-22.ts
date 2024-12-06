import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-22',
    standalone: true,
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Vertical slider</ori-label>
            <div class="flex h-40 justify-center">
                <ori-slider [defaultValue]="[5]" [max]="10" [orientation]="'vertical'" aria-label="Vertical slider" />
            </div>
        </div>
    `
})
export default class Slider22Component {}
