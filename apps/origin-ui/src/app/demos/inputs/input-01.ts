import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-input-01',
    standalone: true,
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <ori-label [htmlFor]="'input-01'">Simple input</ori-label>
            <ori-input class="block" [id]="'input-01'" placeholder="Email" type="email" />
        </div>
    `
})
export default class Input01Component {}
