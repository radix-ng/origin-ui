import { Component } from '@angular/core';
import { OriToggleGroupComponent, OriToggleGroupItemComponent } from '~/registry/default/ui/toggle-group';

@Component({
    selector: 'demo-button-110',
    imports: [OriToggleGroupComponent, OriToggleGroupItemComponent],
    template: `
        <ori-toggle-group
            class="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
            type="single"
            variant="outline"
            value="left"
        >
            <button
                class="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                value="left"
            >
                Left
            </button>
            <button
                class="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                value="center"
            >
                Center
            </button>
            <button
                class="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                value="right"
            >
                Right
            </button>
        </ori-toggle-group>
    `
})
export default class Button110Component {}
