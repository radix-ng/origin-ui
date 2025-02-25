import { computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground',
                secondary: 'border-transparent bg-secondary text-secondary-foreground',
                destructive: 'border-transparent bg-destructive text-destructive-foreground',
                outline: 'text-foreground'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

type BadgeProps = VariantProps<typeof badgeVariants>;

export type OriBadgeVariant = NonNullable<BadgeProps['variant']>;

@Directive({
    selector: 'ori-badge, [oriBadge]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriBadgeComponent {
    readonly class = input<string>();

    readonly variant = input<OriBadgeVariant>('default');

    protected hostClasses = computed(() => cn(badgeVariants({ variant: this.variant(), class: this.class() })));
}
