import { Component } from '@angular/core';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/default/ui/radio-group';

@Component({
    selector: 'demo-radio-13',
    imports: [OriRadioGroup, OriRadioGroupItem],
    template: `
        <fieldset class="space-y-4">
            <legend class="text-foreground text-sm leading-none font-medium">CPU Cores</legend>
            <ori-radio-group class="grid grid-cols-3 gap-2" value="r1">
                @for (item of items; track $index) {
                    <label
                        class="border-input has-[ori-radio-group-item>[data-state=checked]]:border-ring has-[ori-radio-group-item>[data-state=checked]]:bg-accent has-[:focus-visible]:outline-ring/70 relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[ori-radio-group-item>[data-disabled]]:cursor-not-allowed has-[ori-radio-group-item>[data-disabled]]:opacity-50"
                    >
                        <ori-radio-group-item
                            class="sr-only after:absolute after:inset-0"
                            [value]="item.id"
                            [disabled]="item.disabled"
                        />
                        <p class="text-foreground text-sm leading-none font-medium">{{ item.label }}</p>
                    </label>
                }
            </ori-radio-group>
        </fieldset>
    `
})
export default class Radio13Component {
    readonly items = [
        { id: 'radio-13-r1', value: 'r1', label: '2 CPU', disabled: false },
        { id: 'radio-13-r2', value: 'r2', label: '4 CPU', disabled: false },
        { id: 'radio-13-r3', value: 'r3', label: '6 CPU', disabled: false },
        { id: 'radio-13-r4', value: 'r4', label: '8 CPU', disabled: false },
        { id: 'radio-13-r5', value: 'r5', label: '12 CPU', disabled: false },
        { id: 'radio-13-r6', value: 'r6', label: '16 CPU', disabled: true }
    ];
}
