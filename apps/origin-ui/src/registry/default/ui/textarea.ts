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
            'flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50',
            this.class()
        )
    );
}
