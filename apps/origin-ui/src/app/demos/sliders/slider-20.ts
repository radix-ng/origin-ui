import {Component, computed, signal} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";
import {OriLabel} from "@origin-ui/components/label";
import {OriButton} from "@origin-ui/components/button";
import {LucideAngularModule, Minus, Plus} from "lucide-angular";

@Component({
    selector: "demo-slider-20",
    standalone: true,
    imports: [OriSlider, OriLabel, OriButton, LucideAngularModule],
    template: `
        <div class="flex flex-col gap-3">
            <ori-label className="tabular-nums">{{ value()[0] }} credits/mo</ori-label>
            <div class="flex items-center gap-4">
                <div>
                    <ori-button
                        variant="outline"
                        size="icon"
                        class="size-8"
                        aria-label="Decrease value"
                        (click)="decreaseValue()"
                        [disabled]="isDecreaseDisabled()"
                    >
                        <lucide-angular [img]="MinusIcon" size="16" strokeWidth="2" aria-hidden="true" />
                    </ori-button>
                </div>
                <ori-slider class="flex-grow"
                            [defaultValue]="value()"
                            [min]="minValue"
                            [max]="maxValue"
                            [step]="steps"
                            (onValueChange)="onValueChange($event)"
                            aria-label="Dual range slider" />
                <div>
                    <ori-button
                        variant="outline"
                        size="icon"
                        class="size-8"
                        aria-label="Increase value"
                        (click)="increaseValue()"
                        [disabled]="isIncreaseDisabled()"
                    >
                        <lucide-angular [img]="PlusIcon" size="16" strokeWidth="2" aria-hidden="true" />
                    </ori-button>
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
