import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    model,
    NgZone,
    numberAttribute,
    output,
    signal
} from '@angular/core';
import { RdxSliderModule } from '@radix-ng/primitives/slider';
import { RdxTooltipTrigger } from '@radix-ng/primitives/tooltip2';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';

type Orientation = 'horizontal' | 'vertical';

@Component({
    selector: 'ori-slider',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RdxSliderModule,
        RdxTooltipTrigger,
        OriTooltip,
        OriTooltipContent
    ],
    template: `
        <rdx-slider
            [modelValue]="defaultValue()"
            [step]="step()"
            [min]="min()"
            [max]="max()"
            [orientation]="orientation()"
            (valueChange)="handlerValueChange($event)"
            className="relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50"
        >
            <rdx-slider-track
                class="bg-secondary relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
            >
                <rdx-slider-range
                    class="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                />
            </rdx-slider-track>

            @for (item of defaultValue(); track $index) {
                @if (showTooltip()) {
                    <ng-container [open]="showTooltipState()" oriTooltip isControlledState>
                        <rdx-slider-thumb
                            class="border-primary bg-background focus-visible:outline-ring/40 block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-[3px] data-[disabled]:cursor-not-allowed"
                            [rdxOnPointerDown]="handlePointerDown"
                            rdxTooltipTrigger
                        />

                        <ori-tooltip-content
                            side="top"
                            sideOffset="8"
                            contentClass="bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-w-70 rounded-md border px-3 py-1.5 text-sm"
                        >
                            {{ currentValue()[0] }}
                        </ori-tooltip-content>
                    </ng-container>
                } @else {
                    <rdx-slider-thumb
                        class="border-primary bg-background focus-visible:outline-ring/40 block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-[3px] data-[disabled]:cursor-not-allowed"
                    />
                }
            }
        </rdx-slider>
    `
})
export class OriSlider {
    private readonly ngZone = inject(NgZone);

    readonly defaultValue = model<number[]>([]);

    readonly min = input(0, { transform: numberAttribute });

    readonly max = input(100, { transform: numberAttribute });

    readonly step = input(1, { transform: numberAttribute });

    readonly orientation = input<Orientation>('horizontal');

    readonly showTooltip = input(false, { transform: booleanAttribute });

    readonly onValueChange = output<any>();

    protected readonly showTooltipState = signal(false);

    protected readonly currentValue = signal(this.defaultValue());

    handlerValueChange($event: any) {
        this.currentValue.set($event);
        this.onValueChange.emit($event);
    }

    handlePointerDown = () => {
        this.showTooltipState.set(true);

        const handlePointerUp = () => {
            this.showTooltipState.set(false);

            document.removeEventListener('pointerup', handlePointerUp);
        };

        this.ngZone.runOutsideAngular(() => {
            document.addEventListener('pointerup', handlePointerUp);
        });

        return;
    };
}
