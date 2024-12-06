import { Component } from '@angular/core';

import { OriCheckbox } from '@origin-ui/components/checkbox';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-checkbox-04',
    standalone: true,
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox class="flex" id="checkbox-04" disabled />
            <ori-label htmlFor="checkbox-04">Disabled checkbox</ori-label>
        </div>
    `
})
export default class Checkbox04Component {}
