import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    type CheckedState,
    RdxCheckboxButtonDirective,
    RdxCheckboxIndicatorDirective,
    RdxCheckboxInputDirective,
    RdxCheckboxRootDirective
} from '@radix-ng/primitives/checkbox';
import { cva } from 'class-variance-authority';

const variants = cva(
    'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-500'
);

@Component({
    selector: 'ori-checkbox',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RdxCheckboxIndicatorDirective,
        RdxCheckboxInputDirective,
        RdxCheckboxButtonDirective
    ],
    hostDirectives: [
        {
            directive: RdxCheckboxRootDirective,
            inputs: ['checked', 'disabled'],
            outputs: ['onCheckedChange']
        }
    ],
    host: {
        // set to null on host element
        '[attr.id]': 'null',
        '[attr.data-state]': 'state()',
        // for peer with label
        '[disabled]': 'disabled()',
        '[attr.data-disabled]': 'disabled() ? "true" : undefined',
        '[class]': 'hostClasses()'
    },
    template: `
        <button [id]="id()" [class]="computedClass()" [disabled]="disabled()" rdxCheckboxButton>
            <span class="grid place-content-center text-current" rdxCheckboxIndicator>
                @if (checked() === 'indeterminate') {
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
                        />
                    </svg>
                } @else if (checked()) {
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                        />
                    </svg>
                }
            </span>
        </button>
        <input rdxCheckboxInput />
    `
})
export class OriCheckbox {
    readonly id = input<string>();

    readonly checked = model<CheckedState>(false);

    readonly disabled = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('flex peer', this.class()));

    readonly className = input<string>();

    protected computedClass = computed(() => cn(variants({ class: this.className() })));

    protected state = computed(() => {
        if (this.checked() === 'indeterminate') {
            return 'indeterminate';
        }
        return this.checked() ? 'checked' : 'unchecked';
    });
}
