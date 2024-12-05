import {Component, EventEmitter, inject, Input, NgZone, OnDestroy, Output, signal} from "@angular/core";
import {RdxSliderModule} from "@radix-ng/primitives/slider";
import {RdxTooltipModule} from "@radix-ng/primitives/tooltip";
import {OriTooltip} from "@origin-ui/components/tooltip";

type Orientation = "horizontal" | "vertical";

@Component({
    selector: "ori-slider",
    standalone: true,
    imports: [RdxSliderModule, RdxTooltipModule, OriTooltip],
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

                @if(showTooltip) {
                    <ng-container rdxTooltipRoot [open]="showTooltipState()">
                        <rdx-slider-thumb
                            rdxTooltipTrigger
                            (pointerdown)="handlePointerDown()"
                            class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed"
                        />

                        <ng-template [sideOffset]="4" rdxTooltipContent>
                            <ori-tooltip-content className="px-2 py-1 text-xs">
                                // TODO
                            </ori-tooltip-content>
                        </ng-template>
                    </ng-container>
                } @else {
                    <rdx-slider-thumb
                        class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed"
                    />
                }
            }
        </rdx-slider>
    `
})
export class OriSlider implements OnDestroy {
    @Input() defaultValue: number[] = [];

    @Input() min: number = 0;

    @Input() max: number = 100;

    @Input() step: number = 1;

    @Input() orientation: Orientation = 'horizontal';

    @Input() showTooltip: boolean = false;

    @Output() onValueChange: EventEmitter<any> = new EventEmitter();

    readonly showTooltipState = signal(false);

    private pointerUpListener = this.handlePointerUp.bind(this);

    private readonly ngZone = inject(NgZone);

    handlerValueChange($event: any) {
        this.onValueChange.emit($event);
    }

    handlePointerDown() {
        if (this.showTooltip) {
            this.showTooltipState.set(true);

            this.ngZone.runOutsideAngular(() => {
                document.addEventListener('pointerup', this.pointerUpListener);
            });
        }
    }

    handlePointerUp() {
        if (this.showTooltip) {
            this.showTooltipState.set(false);

            document.removeEventListener('pointerup', this.pointerUpListener);
        }
    }

    ngOnDestroy(): void {
        if (this.showTooltip) {
            document.removeEventListener('pointerup', this.pointerUpListener);
        }
    }
}
