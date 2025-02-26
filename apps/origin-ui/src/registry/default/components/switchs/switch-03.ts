import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { SwitchComponent } from '~/registry/default/ui/switch';

@Component({
    selector: 'demo-switch-03',
    imports: [
        OriLabel,
        SwitchComponent
    ],
    template: `
        <div
            class="inline-flex items-center gap-2"
            [attr.style]="'--primary: 238.7 83.5% 66.7%; --ring: 238.7 83.5% 66.7%;'"
        >
            <button [id]="id" [checked]="true" oriSwitch></button>
            <label class="sr-only" [htmlFor]="id" oriLabel>Colored switch</label>
        </div>
    `
})
export default class Switch03Component {
    readonly id = 'switch03';
}
