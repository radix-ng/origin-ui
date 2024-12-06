import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-input-08',
    standalone: true,
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <ori-label [htmlFor]="'input-08'">Disabled input</ori-label>
            <ori-input class="block" [id]="'input-08'" placeholder="Email" type="email" disabled />
        </div>
    `
})
export default class Input08Component {}
