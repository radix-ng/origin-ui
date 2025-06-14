import { ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';
import { cva } from 'class-variance-authority';

@Directive({
    selector: '[oriPopoverTrigger]',
    hostDirectives: [RdxTooltipTriggerDirective]
})
export class OriPopoverTriggerDirective {}

const variants = cva(
    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden'
);

@Component({
    selector: 'ori-popover-content, [oriPopoverContent]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
    `
})
export class OriPopoverContent {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn(variants({ class: this.class() })));
}
