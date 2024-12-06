import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-input-02',
    standalone: true,
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <ori-label [htmlFor]="'input-02'">
                Required input
                <span class="text-destructive">*</span>
            </ori-label>
            <ori-input class="block" [id]="'input-02'" placeholder="Email" type="email" required />
        </div>
    `
})
export default class Input02Component {}
