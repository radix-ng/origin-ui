import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxTooltipArrowDirective,
    RdxTooltipContentAttributesDirective,
    RdxTooltipContentDirective,
    RdxTooltipRootDirective
} from '@radix-ng/primitives/tooltip';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const variants = cva(
    'relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

@Component({
    selector: 'ori-tooltip-content-attributes',
    imports: [RdxTooltipArrowDirective],
    hostDirectives: [RdxTooltipContentAttributesDirective],
    host: {
        '[class]': 'computedClass()'
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

    protected computedClass = computed(() => cn(variants(), this.class()));
}

@Directive({
    selector: 'ori-tooltip-content, [ori-tooltip-content]',
    standalone: true,
    hostDirectives: [{ directive: RdxTooltipContentDirective, inputs: ['sideOffset'] }]
})
export class OriTooltipContentDirective {}

@Directive({
    selector: 'ori-tooltip, [oriTooltip]',
    standalone: true,
    hostDirectives: [{ directive: RdxTooltipRootDirective, inputs: ['delayDuration', 'open'] }]
})
export class OriTooltip {}
