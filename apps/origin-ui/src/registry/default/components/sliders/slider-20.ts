import { Component, computed, signal } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import { OriLabel } from '~/registry/default/ui/label';
import { OriSlider } from '~/registry/default/ui/slider';
import { LucideAngularModule, Minus, Plus } from 'lucide-angular';

@Component({
    selector: 'demo-slider-20',
    imports: [OriSlider, OriLabel, OriButton, LucideAngularModule],
    template: `
        <div class="flex flex-col gap-3">
            <label class="tabular-nums" oriLabel>{{ value()[0] }} credits/mo</label>
            <div class="flex items-center gap-4">
                <div>
                    <button
                        class="size-8"
                        [disabled]="isDecreaseDisabled()"
                        (click)="decreaseValue()"
                        oriButton
                        variant="outline"
                        size="icon"
                        aria-label="Decrease value"
                    >
                        <lucide-angular [img]="MinusIcon" size="16" strokeWidth="2" aria-hidden="true" />
                    </button>
                </div>
                <ori-slider
                    class="flex-grow"
                    [defaultValue]="value()"
                    [min]="minValue"
                    [max]="maxValue"
                    [step]="steps"
                    (onValueChange)="onValueChange($event)"
                    aria-label="Dual range slider"
                />
                <div>
                    <button
                        class="size-8"
                        [disabled]="isIncreaseDisabled()"
                        (click)="increaseValue()"
                        oriButton
                        variant="outline"
                        size="icon"
                        aria-label="Increase value"
                    >
                        <lucide-angular [img]="PlusIcon" size="16" strokeWidth="2" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    `
})
export default class Slider20Component {
    readonly MinusIcon = Minus;
    readonly PlusIcon = Plus;

    minValue = 0;
    maxValue = 200;
    steps = 5;

    value = signal([100]);

    isDecreaseDisabled = computed(() => this.value()[0] === this.minValue);
    isIncreaseDisabled = computed(() => this.value()[0] === this.maxValue);

    decreaseValue() {
        this.value.update(([current]) => [Math.max(this.minValue, current - this.steps)]);
    }

    increaseValue() {
        this.value.update(([current]) => [Math.min(this.maxValue, current + this.steps)]);
    }

    onValueChange(newValue: number[]) {
        this.value.set(newValue);
    }
}
