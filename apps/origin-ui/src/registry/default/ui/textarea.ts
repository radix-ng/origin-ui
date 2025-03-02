import { computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';

@Directive({
    selector: '[oriTextarea]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriTextarea {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn(
            'border-input placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex min-h-19.5 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
            this.class()
        )
    );
}
