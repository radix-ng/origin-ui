import {Component, computed, input} from '@angular/core';
import {RdxLabelDirective} from '@radix-ng/primitives/label';
import {cva} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {cn} from "@origin-ui/components/utils";

const labelVariants = cva('text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70');

@Component({
    selector: 'ori-label',
    standalone: true,
    imports: [RdxLabelDirective],
    template: `
    <label
      rdxLabel
      [class]="computedClass()"
      [htmlFor]="htmlFor()"
    >
      <ng-content></ng-content>
    </label>
  `
})
export class OriLabel {
    readonly className = input<ClassValue>('');

    readonly htmlFor = input<string>('');

    protected computedClass = computed(() => cn(labelVariants(), this.className()));
}
