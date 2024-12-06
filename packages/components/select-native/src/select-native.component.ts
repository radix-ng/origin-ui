import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'ori-select-native',
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
        <select
            [id]="id()"
            [ngClass]="
                cn(
                    'border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/20 has-[option[disabled]:checked]:text-muted-foreground peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border text-sm shadow-sm shadow-black/5 transition-shadow focus-visible:outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                    multiple ? '[&_option:checked]:bg-accent py-1 [&>*]:px-3 [&>*]:py-1' : 'h-9 pe-8 ps-3',
                    className
                )
            "
        >
            <ng-content />
        </select>

        @if (!multiple) {
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

    @Input() multiple: boolean = false;

    @Input() className: string = '';
}
