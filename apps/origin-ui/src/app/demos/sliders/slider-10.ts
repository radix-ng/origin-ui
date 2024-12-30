import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSlider } from '@origin-ui/components/slider';

@Component({
    selector: 'demo-slider-10',
    imports: [OriSlider, OriLabel],
    template: `
        <div class="space-y-4">
            <ori-label>Slider with labels and tooltip</ori-label>
            <div>
                <span
                    class="text-muted-foreground mb-3 flex w-full items-center justify-between gap-2 text-xs font-medium"
                    aria-hidden="true"
                >
                    <span>Low</span>
                    <span>High</span>
                </span>
                <ori-slider [defaultValue]="[50]" [step]="10" showTooltip aria-label="Slider with labels and tooltip" />
            </div>
        </div>
    `
})
export default class Slider10Component {}
