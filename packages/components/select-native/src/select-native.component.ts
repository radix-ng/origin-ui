import {Component, input, Input} from "@angular/core";
import {LucideAngularModule, ChevronDown} from "lucide-angular";
import {cn} from "@origin-ui/components/utils";
import {NgClass} from "@angular/common";

@Component({
    selector: "ori-select-native",
    standalone: true,
    imports: [LucideAngularModule, NgClass],
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
        <select [id]="id()"
                [ngClass]="cn(
        'peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border border-input bg-background text-sm text-foreground shadow-sm shadow-black/5 transition-shadow focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground',
        multiple ? 'py-1 [&>*]:px-3 [&>*]:py-1 [&_option:checked]:bg-accent' : 'h-9 pe-8 ps-3',
        className
        )">
            <ng-content/>
        </select>

        @if (!multiple) {
            <span
                class="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
                <lucide-angular [img]="ChevronDownIcon" [size]="16" [strokeWidth]="2" aria-hidden="true"/>
            </span>
        }
    `
})
export class OriSelectNative {
    protected readonly ChevronDownIcon = ChevronDown;
    protected readonly cn = cn;

    readonly id = input<string>('');

    @Input() multiple: boolean = false;

    @Input() className: string = '';
}
