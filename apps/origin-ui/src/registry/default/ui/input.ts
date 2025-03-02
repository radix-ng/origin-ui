import { computed, Directive, input, output } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';

@Directive({
    selector: '[oriInput]',
    host: {
        '[type]': 'type()',
        '[class]': 'hostClasses()',
        '(input)': 'handleInput($event)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class OriInput {
    readonly type = input.required<string>();

    readonly class = input<string>('');

    readonly valueChange = output<string>();
    readonly focusChange = output<boolean>();

    protected readonly hostClasses = computed(() =>
        cn(
            'border-input file:text-foreground placeholder:text-muted-foreground/70 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            this.type() === 'search' &&
                '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
            this.type() === 'file' &&
                'text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic',
            this.class()
        )
    );

    handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const newValue = inputElement.value;

        this.valueChange.emit(newValue);
    }

    onFocus() {
        this.focusChange.emit(true);
    }

    onBlur() {
        this.focusChange.emit(false);
    }
}
