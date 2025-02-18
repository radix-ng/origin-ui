import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { SwitchComponent } from '~/registry/ui/switch';

@Component({
    selector: 'demo-switch-02',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button
                class="h-5 w-8 [&_span]:size-4 [&_span]:data-[state=checked]:translate-x-3 rtl:[&_span]:data-[state=checked]:-translate-x-3"
                [id]="id"
                oriSwitch
            ></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>Small switch</label>
        </div>
    `
})
export default class Switch02Component {
    readonly id = 'switch02';
}
