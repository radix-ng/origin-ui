import {Component, EventEmitter, Input, Output} from "@angular/core";
import {RdxSliderModule} from "@radix-ng/primitives/slider";
import {RdxTooltipRootDirective, RdxTooltipTriggerDirective} from "@radix-ng/primitives/tooltip";
import {OriTooltip} from "@origin-ui/components/tooltip";

type Orientation = "horizontal" | "vertical";

@Component({
    selector: "ori-slider",
    standalone: true,
    imports: [RdxSliderModule, RdxTooltipRootDirective, RdxTooltipTriggerDirective, OriTooltip],
    styles: `
        :host {

        }
    `,
    template: `
        <rdx-slider [modelValue]="defaultValue" [step]="step" [min]="min" [max]="max"
                    [orientation]="orientation"
                    (valueChange)="handlerValueChange($event)"
                    className="relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50">
            <rdx-slider-track
                class="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2">
                <rdx-slider-range
                    class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"/>
            </rdx-slider-track>

            @for (item of defaultValue; track $index) {

                <ng-container #tooltipRoot="rdxTooltipRoot" rdxTooltipRoot>
                    <button #triggerElement rdxTooltipTrigger>
                        <rdx-slider-thumb
                            class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed"/>
                    </button>
                    <ori-tooltip-content className="px-2 py-1 text-xs" />
                </ng-container>
            }
        </rdx-slider>
    `
})
export class OriSlider {
    @Input() defaultValue: number[] = [];

    @Input() min: number = 0;

    @Input() max: number = 100;

    @Input() step: number = 1;

    @Input() orientation: Orientation = 'horizontal';

    @Output() onValueChange: EventEmitter<any> = new EventEmitter();

    handlerValueChange($event: any) {
        this.onValueChange.emit($event);
    }
}
