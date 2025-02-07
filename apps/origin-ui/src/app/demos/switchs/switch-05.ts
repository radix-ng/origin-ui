import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { SwitchComponent } from '@origin-ui/components/switch';

@Component({
    selector: 'demo-switch-05',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button class="rounded-md [&_span]:rounded" [id]="id" oriSwitch></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>Square switch</label>
        </div>
    `
})
export default class Switch05Component {
    readonly id = 'switch05';
}
