import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { OriSlider } from '~/registry/default/ui/slider';

@Component({
    selector: 'demo-slider-22',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <label oriLabel>Vertical slider</label>
            <div class="flex h-40 justify-center">
                <ori-slider [defaultValue]="[5]" [max]="10" [orientation]="'vertical'" aria-label="Vertical slider" />
            </div>
        </div>
    `
})
export default class Slider22Component {}
