import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] [&>svg]:shrink-0 leading-normal',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
                secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
                destructive:
                    'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
                outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
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
