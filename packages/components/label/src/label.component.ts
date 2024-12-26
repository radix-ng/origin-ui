import { Component, computed, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const labelVariants = cva(
    'text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

@Component({
    selector: 'ori-label',
    imports: [RdxLabelDirective],
    host: { class: 'flex' },
    template: `
        <label [class]="computedClass()" [htmlFor]="htmlFor()" rdxLabel>
            <ng-content></ng-content>
        </label>
    `
})
export class OriLabel {
    readonly className = input<ClassValue>('');

    readonly htmlFor = input<string>('');

    protected computedClass = computed(() => cn(labelVariants(), this.className()));
}
