import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxTabsContentDirective,
    RdxTabsListDirective,
    RdxTabsRootDirective,
    RdxTabsTriggerDirective
} from '@radix-ng/primitives/tabs';

@Directive({
    selector: 'ori-tabs',
    standalone: true,
    hostDirectives: [{ directive: RdxTabsRootDirective, inputs: ['defaultValue', 'orientation'] }]
})
export class OriTabs {}

@Directive({
    selector: 'ori-tabs-list',
    standalone: true,
    hostDirectives: [RdxTabsListDirective],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriTabsList {
    readonly class = input<string>();

    protected computedClass = computed(() =>
        cn('inline-flex items-center justify-center rounded-lg bg-muted p-0.5 text-muted-foreground/70', this.class())
    );
}

@Directive({
    selector: 'ori-tabs-trigger',
    standalone: true,
    hostDirectives: [{ directive: RdxTabsTriggerDirective, inputs: ['value'] }],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriTabsTrigger {
    readonly class = input<string>();

    protected computedClass = computed(() =>
        cn(
            'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5',
            this.class()
        )
    );
}

@Directive({
    selector: 'ori-tabs-content, [oriTabsContent]',
    standalone: true,
    hostDirectives: [{ directive: RdxTabsContentDirective, inputs: ['value'] }],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriTabsContent {
    readonly class = input<string>();

    protected computedClass = computed(() =>
        cn(
            'mt-2 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70',
            this.class()
        )
    );
}