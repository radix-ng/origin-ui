import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxTabsContentDirective,
    RdxTabsListDirective,
    RdxTabsRootDirective,
    RdxTabsTriggerDirective
} from '@radix-ng/primitives/tabs';

@Directive({
    selector: 'ori-tabs, [oriTabs]',
    hostDirectives: [
        { directive: RdxTabsRootDirective, inputs: ['defaultValue', 'orientation'], outputs: ['onValueChange'] }]
})
export class OriTabs {}

@Directive({
    selector: 'ori-tabs-list, [oriTabsList]',
    hostDirectives: [RdxTabsListDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriTabsList {
    readonly class = input<string>();

    protected hostClasses = computed(() =>
        cn(
            'bg-muted text-muted-foreground/70 inline-flex w-fit items-center justify-center rounded-md p-0.5',
            this.class()
        )
    );
}

@Directive({
    selector: 'ori-tabs-trigger, [oriTabsTrigger]',
    hostDirectives: [{ directive: RdxTabsTriggerDirective, inputs: ['value'] }],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriTabsTrigger {
    readonly class = input<string>();

    protected hostClasses = computed(() =>
        cn(
            'hover:text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-xs [&_svg]:shrink-0',
            this.class()
        )
    );
}

@Directive({
    selector: 'ori-tabs-content, [oriTabsContent]',
    hostDirectives: [{ directive: RdxTabsContentDirective, inputs: ['value'] }],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriTabsContent {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('flex-1 outline-none', this.class()));
}
