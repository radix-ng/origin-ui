import {Component, computed, input, output} from "@angular/core";

@Component({
    selector: 'ori-input',
    standalone: true,
    host: {
        // set to null on host element
        '[attr.id]': 'null'
    },
    template: `
        <input
            [id]="id()"
            [type]="type()"
            [class]="computedClass()"
            [attr.placeholder]="placeholder()"
            [attr.disabled]="disabled() === true || disabled() === '' ? true : null"
            [attr.required]="required() === true || required() === '' ? true : null"
            [value]="value()"
            (input)="handleInput($event)"
            (focus)="onFocus()"
            (blur)="onBlur()"
        />
    `
})
export class OriInput {

    readonly id = input<string>('');
    readonly type = input<string>('text');
    readonly placeholder = input<string>('');
    readonly className = input<string>('');
    readonly disabled = input<boolean | ''>(false);
    readonly required = input<boolean | ''>(false);
    readonly value = input<string | null>(null);

    readonly valueChange = output<string>();
    readonly focusChange = output<boolean>();

    computedClass = computed(() => {
        const baseClass =
            'flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50';

        const typeClass =
            this.type() === 'search'
                ? '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
                : this.type() === 'file'
                    ? 'p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground'
                    : '';

        return `${baseClass} ${typeClass} ${this.className()}`.trim();
    });

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
