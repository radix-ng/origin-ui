import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { SwitchComponent } from '@origin-ui/components/switch';

@Component({
    selector: 'demo-switch-04',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button [id]="id" disabled oriSwitch></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>Disabled</label>
        </div>
    `
})
export default class Switch04Component {
    readonly id = 'switch04';
}
