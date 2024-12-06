import { Component, computed, input, Input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxTooltipContentAttributesDirective, RdxTooltipModule } from '@radix-ng/primitives/tooltip';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const variants = cva(
    'relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

@Component({
    selector: 'ori-tooltip-content',
    standalone: true,
    imports: [RdxTooltipModule],
    hostDirectives: [RdxTooltipContentAttributesDirective],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
        @if (showArrow) {
            <div class="fill-popover -my-px drop-shadow-[0_1px_0_hsl(var(--border))]" rdxTooltipArrow></div>
        }
    `
})
export class OriTooltip {
    readonly className = input<ClassValue>('');

    @Input() showArrow: boolean = false;

    protected computedClass = computed(() => cn(variants(), this.className()));
}
