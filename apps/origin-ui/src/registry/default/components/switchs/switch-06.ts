import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { SwitchComponent } from '~/registry/default/ui/switch';

@Component({
    selector: 'demo-switch-06',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button
                class="[&_span]:border-input h-3 w-9 border-none outline-offset-[6px] [&_span]:border"
                [id]="id"
                oriSwitch
            ></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>M2-style switch</label>
        </div>
    `
})
export default class Switch06Component {
    readonly id = 'switch06';
}
