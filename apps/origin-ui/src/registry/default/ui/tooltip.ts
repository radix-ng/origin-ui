import { BooleanInput } from '@angular/cdk/coercion';
import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    ElementRef,
    input,
    numberAttribute,
    viewChild
} from '@angular/core';
import { Side } from '@radix-ng/primitives/popper';
import {
    RdxTooltip,
    RdxTooltipArrow,
    RdxTooltipContent,
    RdxTooltipContentWrapper,
    RdxTooltipPortal,
    RdxTooltipPortalPresence
} from '@radix-ng/primitives/tooltip2';
import { ClassValue } from 'clsx';
import { cn } from '~/registry/default/lib/utils';

@Component({
    selector: 'ori-tooltip-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxTooltipArrow, RdxTooltipPortal, RdxTooltipPortalPresence, RdxTooltipContent, RdxTooltipContentWrapper],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <div [container]="tooltipContentRef()" rdxTooltipPortal>
            <ng-template #tooltipContent rdxTooltipPortalPresence>
                <div
                    [class]="
                        cn(
                            'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-w-70 rounded-md border px-3 py-1.5 text-sm',
                            contentClass()
                        )
                    "
                    [sideOffset]="sideOffset()"
                    [side]="side()"
                    rdxTooltipContentWrapper
                >
                    <div rdxTooltipContent>
                        <ng-content />
                    </div>
                    @if (showArrow()) {
                        <div
                            class="fill-popover [&_svg]:fill-popover -my-px drop-shadow-[0_1px_0_var(--border)] [&_svg]:-my-px [&_svg]:drop-shadow-[0_1px_0_var(&#45;&#45;border)]"
                            rdxTooltipArrow
                        ></div>
                    }
                </div>
            </ng-template>
        </div>
    `
})
export class OriTooltipContent {
    readonly class = input<ClassValue>();

    readonly contentClass = input<ClassValue>();

    readonly showArrow = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly sideOffset = input(5, { transform: numberAttribute });

    readonly side = input<Side>('top');

    protected readonly tooltipContentRef = viewChild.required<ElementRef<HTMLElement>>('tooltipContent');

    protected readonly hostClasses = computed(() => cn('hidden', this.class()));
    protected readonly cn = cn;
}

@Directive({
    selector: 'ori-tooltip, [oriTooltip]',
    hostDirectives: [
        {
            directive: RdxTooltip,
            inputs: ['delayDuration', 'open', 'skipDelayDuration', 'closeDelay', 'disabled', 'isControlledState']
        }
    ]
})
export class OriTooltip {}
