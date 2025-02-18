import { Component, signal } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { SwitchComponent } from '~/registry/ui/switch';

@Component({
    selector: 'demo-switch-12',
    imports: [
        SwitchComponent,
        OriLabel
    ],
    template: `
        <div
            class="border-input has-[[data-state=checked]]:border-ring relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-sm shadow-black/5"
        >
            <button
                class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
                [id]="id"
                [attr.aria-describedby]="id + '-description'"
                oriSwitch
            ></button>
            <div class="grid grow gap-2">
                <label [htmlFor]="id" oriLabel>
                    Label{{ ' ' }}
                    <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                </label>
                <p class="text-muted-foreground text-xs" [id]="id + '-description'">A short description goes here.</p>
            </div>
        </div>
    `
})
export default class Switch12Component {
    readonly id = 'switch12';

    readonly checked = signal<boolean>(true);
}
