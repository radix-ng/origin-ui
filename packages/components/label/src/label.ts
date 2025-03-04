import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { ClassValue } from 'clsx';

@Directive({
    selector: '[oriLabel]',
    hostDirectives: [{ directive: RdxLabelDirective, inputs: ['htmlFor', 'id'] }],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriLabel {
    readonly class = input<ClassValue>();

    protected computedClass = computed(() =>
        cn(
            'text-foreground text-sm leading-4 font-medium select-none peer-data-[disabled=true]:pointer-events-none peer-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            this.class()
        )
    );
}
