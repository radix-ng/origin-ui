import {Component, computed, input, model, output} from "@angular/core";

import {RdxToggleDirective} from "@radix-ng/primitives/toggle";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@origin-ui/components/utils";


const toggleVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-muted outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-3",
                sm: "h-8 px-2",
                lg: "h-10 px-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);


type ToggleProps = VariantProps<typeof toggleVariants>;

type OriToggleSize = NonNullable<ToggleProps['size']>;
type OriToggleVariant = NonNullable<ToggleProps['variant']>;


@Component({
    selector: 'ori-toggle',
    standalone: true,
    imports: [RdxToggleDirective],
    template: `
    <button [class]="computedClass()" rdxToggle
            type="button"
            [pressed]="pressed()"
            (onPressedChange)="handlePressedChange($event)">
      <ng-content></ng-content>
    </button>
  `
})
export class OriToggleComponent {
    readonly className = input<string>();

    readonly variant = input<OriToggleVariant>('default');

    readonly pressed = input<boolean>(false);

    readonly size = input<OriToggleSize>('default');

    readonly onPressedChange = output<boolean>();

    protected computedClass = computed(() =>
        cn(toggleVariants({variant: this.variant(), size: this.size(), class: this.className()}))
    );

    handlePressedChange(isPressed: boolean): void {
        this.onPressedChange.emit(isPressed); // Передача события родителю
    }
}
