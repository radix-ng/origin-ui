import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-input-03',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-03">Input with helper text</label>
            <input id="input-03" oriInput placeholder="Email" type="email" />
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                We won&lsquo;t share your email with anyone
            </p>
        </div>
    `
})
export default class Input03Component {}
