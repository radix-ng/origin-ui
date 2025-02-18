import { Component } from '@angular/core';
import { OriInput } from '~/registry/ui/input';
import { OriLabel } from '~/registry/ui/label';

@Component({
    selector: 'demo-input-02',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-02">
                Required input
                <span class="text-destructive">*</span>
            </label>
            <input id="input-02" oriInput placeholder="Email" type="email" required />
        </div>
    `
})
export default class Input02Component {}
