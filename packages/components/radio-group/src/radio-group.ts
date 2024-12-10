import { Component, Directive, input } from '@angular/core';
import {
    RdxRadioGroupDirective,
    RdxRadioIndicatorDirective,
    RdxRadioItemDirective,
    RdxRadioItemInputDirective
} from '@radix-ng/primitives/radio';

@Directive({
    selector: 'ori-radio-group',
    standalone: true,
    hostDirectives: [
        { directive: RdxRadioGroupDirective, inputs: ['value', 'orientation'], outputs: ['onValueChange'] }],
    host: {
        '[class]': "'grid gap-1'"
    }
})
export class OriRadioGroup {}

@Component({
    selector: 'ori-radio-group-item',
    standalone: true,
    imports: [RdxRadioItemDirective, RdxRadioIndicatorDirective, RdxRadioItemInputDirective],
    host: {
        '[class]': "'flex'"
    },
    template: `
        <button
            class="border-input focus-visible:outline-ring/70 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground aspect-square size-4 rounded-full border shadow-sm shadow-black/5 outline-offset-2 focus-visible:outline focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50"
            [value]="value()"
            [id]="forId()"
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
    readonly value = input.required<string>();

    readonly forId = input<string>('');
}
