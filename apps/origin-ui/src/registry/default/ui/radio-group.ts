import { ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
import {
    RdxRadioGroupDirective,
    RdxRadioIndicatorDirective,
    RdxRadioItemDirective,
    RdxRadioItemInputDirective
} from '@radix-ng/primitives/radio';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'ori-radio-group',
    hostDirectives: [
        {
            directive: RdxRadioGroupDirective,
            inputs: ['value', 'orientation', 'disabled'],
            outputs: ['onValueChange']
        }
    ],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriRadioGroup {
    readonly class = input<string>();

    readonly hostClasses = computed(() => cn('grid gap-3', this.class()));
}

@Component({
    selector: 'ori-radio-group-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxRadioItemDirective, RdxRadioIndicatorDirective, RdxRadioItemInputDirective],
    host: {
        '[class]': "'flex'"
    },
    template: `
        <button
            [class]="
                cn(
                    'border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                    classRadioItem()
                )
            "
            [value]="value()"
            [id]="forId()"
            [disabled]="disabled()"
            [required]="required()"
            rdxRadioItem
        >
            <div class="flex items-center justify-center text-current data-[state=unchecked]:hidden" rdxRadioIndicator>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" />
                </svg>
            </div>
            <input [id]="forId()" [feature]="'fully-hidden'" rdxRadioItemInput />
        </button>
    `
})
export class OriRadioGroupItem {
    readonly classRadioItem = input<string>();

    readonly value = input.required<string>();

    readonly disabled = input<boolean>();

    readonly required = input<boolean>();

    readonly forId = input<string>('');

    protected readonly cn = cn;
}
