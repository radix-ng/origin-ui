import { Component } from '@angular/core';
import { OriInput } from '~/registry/ui/input';
import { OriLabel } from '~/registry/ui/label';

@Component({
    selector: 'demo-input-01',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-01">Simple input</label>
            <input id="input-01" oriInput placeholder="Email" type="email" />
        </div>
    `
})
export default class Input01Component {}
