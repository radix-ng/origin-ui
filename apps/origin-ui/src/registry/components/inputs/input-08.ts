import { Component } from '@angular/core';
import { OriInput } from '~/registry/ui/input';
import { OriLabel } from '~/registry/ui/label';

@Component({
    selector: 'demo-input-08',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-08">Disabled input</label>
            <input id="input-08" oriInput placeholder="Email" type="email" disabled />
        </div>
    `
})
export default class Input08Component {}
