import { Component, computed, inject, input } from '@angular/core';
import { toggleVariants } from '~/registry/ui/toggle';
import { cn } from '~/registry/lib/utils';
import { RdxToggleGroupDirective, RdxToggleGroupItemDirective } from '@radix-ng/primitives/toggle-group';
import { type VariantProps } from 'class-variance-authority';
import { ORI_TOGGLE_GROUP_CONTEXT } from '~/registry/ui/context-token';
import { ORI_TOGGLE_GROUP_CONTEXT_PROVIDER } from '~/registry/ui/context.provider';

type ToggleGroupProps = VariantProps<typeof toggleVariants>;

export type OriToggleGroupSize = NonNullable<ToggleGroupProps['size']>;
export type OriToggleGroupVariant = NonNullable<ToggleGroupProps['variant']>;

@Component({
    selector: 'ori-toggle-group',
    hostDirectives: [{ directive: RdxToggleGroupDirective, inputs: ['type', 'value', 'disabled'] }],
    providers: [ORI_TOGGLE_GROUP_CONTEXT_PROVIDER],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriToggleGroupComponent {
    readonly variant = input<OriToggleGroupVariant>('default');

    readonly size = input<OriToggleGroupSize>('default');

    readonly class = input<string>('');

    readonly computedClass = computed(() => cn('flex items-center justify-center gap-1', this.class()));
}

@Component({
    selector: 'ori-toggle-group-item, [oriToggleGroupItem]',
    hostDirectives: [{ directive: RdxToggleGroupItemDirective, inputs: ['value', 'disabled'] }],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriToggleGroupItemComponent {
    private readonly context = inject(ORI_TOGGLE_GROUP_CONTEXT);

    readonly variant = input<OriToggleGroupVariant>();

    readonly size = input<OriToggleGroupSize>();

    readonly class = input<string>('');

    readonly computedClass = computed(() =>
        cn(
            toggleVariants({
                size: this.context.size || this.size(),
                variant: this.context.variant || this.variant()
            }),
            this.class()
        )
    );
}
