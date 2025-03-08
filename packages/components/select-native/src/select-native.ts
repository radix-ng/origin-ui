import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'ori-select-native',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule],
    styles: `
        :host {
            position: relative;
        }
    `,
    host: {
        // set to null on host element
        '[attr.id]': 'null'
    },
    template: `
        <select
            [id]="id()"
            [value]="value()"
            [class]="
                cn(
                    'border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/20 has-[option[disabled]:checked]:text-muted-foreground peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border text-sm shadow-sm shadow-black/5 transition-shadow focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                    multiple() ? '[&_option:checked]:bg-accent py-1 [&>*]:px-3 [&>*]:py-1' : 'h-9 ps-3 pe-8',
                    className
                )
            "
            (change)="onValueChange.emit($event)"
        >
            <ng-content />
        </select>

        @if (!multiple()) {
            <span
                class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center peer-disabled:opacity-50"
            >
                <lucide-angular [img]="ChevronDownIcon" [size]="16" [strokeWidth]="2" aria-hidden="true" />
            </span>
        }
    `
})
export class OriSelectNative {
    protected readonly ChevronDownIcon = ChevronDown;
    protected readonly cn = cn;

    readonly id = input<string>('');

    readonly value = input<string>();

    readonly multiple = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly className = input<string>('');

    readonly onValueChange = output<Event>();
}
