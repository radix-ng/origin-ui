import { computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
                destructive:
                    'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
                outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-lg px-3 text-xs',
                lg: 'h-10 rounded-lg px-8',
                icon: 'h-9 w-9'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

type OriButtonSize = NonNullable<ButtonProps['size']>;
type OriButtonVariant = NonNullable<ButtonProps['variant']>;

@Directive({
    selector: '[oriButton]',
    host: {
        '[class]': 'hostClasses()'
    }
})
class OriButton {
    readonly class = input<string>();

    readonly variant = input<OriButtonVariant>('default');

    readonly size = input<OriButtonSize>('default');

    protected hostClasses = computed(() =>
        cn(buttonVariants({ variant: this.variant(), size: this.size(), class: this.class() }))
    );
}

export { buttonVariants, OriButton, OriButtonSize, OriButtonVariant };
