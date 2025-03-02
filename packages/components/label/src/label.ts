import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const labelVariants = cva(
    'text-foreground text-sm leading-4 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
);

@Directive({
    selector: '[oriLabel]',
    hostDirectives: [{ directive: RdxLabelDirective, inputs: ['htmlFor', 'id'] }],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriLabel {
    readonly class = input<ClassValue>();

    protected computedClass = computed(() => cn(labelVariants(), this.class()));
}
