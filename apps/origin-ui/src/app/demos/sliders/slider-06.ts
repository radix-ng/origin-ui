import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-06',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with reference labels</ori-label>
            <div>
                <ori-slider [defaultValue]="[15]" [min]="5" [max]="35" aria-label="Slider with reference labels" />
                <span
                    class="text-muted-foreground mt-4 flex w-full items-center justify-between gap-1 text-xs font-medium"
                    aria-hidden="true"
                >
                    <span>5 GB</span>
                    <span>20 GB</span>
                    <span>35 GB</span>
                </span>
            </div>
        </div>
    `
})
export default class Slider06Component {}
