import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { cn } from '~/registry/default/lib/utils';
import { RdxToggleDirective } from '@radix-ng/primitives/toggle';
import { cva, VariantProps } from 'class-variance-authority';

export const toggleVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline: 'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
            },
            size: {
                default: 'h-9 px-3',
                sm: 'h-8 px-2',
                lg: 'h-10 px-3'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

type ToggleProps = VariantProps<typeof toggleVariants>;

export type OriToggleSize = NonNullable<ToggleProps['size']>;
export type OriToggleVariant = NonNullable<ToggleProps['variant']>;

@Component({
    selector: 'ori-toggle',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxToggleDirective],
    template: `
        <button
            [class]="computedClass()"
            [pressed]="pressed()"
            (onPressedChange)="handlePressedChange($event)"
            rdxToggle
            type="button"
        >
            <ng-content></ng-content>
        </button>
    `
})
export class OriToggleComponent {
    readonly className = input<string>();

    readonly variant = input<OriToggleVariant>('default');

    readonly pressed = input<boolean>(false);

    readonly size = input<OriToggleSize>('default');

    readonly onPressedChange = output<boolean>();

    protected computedClass = computed(() =>
        cn(toggleVariants({ variant: this.variant(), size: this.size(), class: this.className() }))
    );

    handlePressedChange(isPressed: boolean): void {
        this.onPressedChange.emit(isPressed);
    }
}
