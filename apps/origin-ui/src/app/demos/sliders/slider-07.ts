import {Component} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";
import {OriLabel} from "@origin-ui/components/label";
import {cn} from "@origin-ui/components/utils";
import {NgClass} from "@angular/common";


@Component({
    selector: "demo-slider-07",
    standalone: true,
    imports: [OriSlider, OriLabel, NgClass],
    template: `
        <div class="flex flex-col gap-4">
            <ori-label>Slider with ticks</ori-label>
            <div>
                <ori-slider [defaultValue]="[5]" [max]="max"
                            aria-label="Slider with ticks"/>
                <span
                    class="mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium text-muted-foreground"
                    aria-hidden="true"
                >
                    @for (tick of ticks; track tick) {
                        <span class="flex w-0 flex-col items-center justify-center gap-2">
                            <span [ngClass]="cn('h-1 w-px bg-muted-foreground/70', tick % skipInterval !== 0 && 'h-0.5')"></span>
                            <span [ngClass]="cn(tick % skipInterval !== 0 && 'opacity-0')">{{ tick }}</span>
                        </span>
                    }
                </span>
            </div>
        </div>
    `
})
export default class Slider07Component {
    protected readonly cn = cn;

    max = 12;

    skipInterval = 2; // Set to 1 to allow no text skipping

    ticks = [...Array(this.max + 1)].map((_, i) => i);
}