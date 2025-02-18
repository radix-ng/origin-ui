import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { SwitchComponent } from '~/registry/ui/switch';

@Component({
    selector: 'demo-switch-01',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button [id]="id" oriSwitch></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>Simple switch</label>
        </div>
    `
})
export default class Switch01Component {
    readonly id = 'switch01';
}
