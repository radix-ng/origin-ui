import { computed, Directive, input, output } from '@angular/core';
import { cn } from '~/registry/lib/utils';

@Directive({
    selector: '[oriInput]',
    host: {
        '[type]': 'type()',
        '[class]': 'computedClass()',
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

    computedClass = computed(() =>
        cn(
            'flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50',
            this.type() === 'search' &&
                '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
            this.type() === 'file' &&
                'p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground',
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
