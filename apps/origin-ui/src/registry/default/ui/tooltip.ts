import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
import { RdxTooltipArrowDirective, RdxTooltipRootDirective } from '@radix-ng/primitives/tooltip';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const tooltipVariants = cva(
    'relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

@Component({
    selector: 'ori-tooltip-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxTooltipArrowDirective],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
        @if (showArrow()) {
            <div class="fill-popover -my-px drop-shadow-[0_1px_0_hsl(var(--border))]" rdxTooltipArrow></div>
        }
    `
})
export class OriTooltipContent {
    readonly class = input<ClassValue>();

    readonly showArrow = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    protected readonly hostClasses = computed(() => cn(tooltipVariants(), this.class()));
}

@Directive({
    selector: 'ori-tooltip, [oriTooltip]',
    hostDirectives: [
        {
            directive: RdxTooltipRootDirective,
            inputs: ['openDelay', 'open']
        }
    ]
})
export class OriTooltip {}
