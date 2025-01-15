import { Component } from '@angular/core';

import { OriCheckbox } from '@origin-ui/components/checkbox';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-checkbox-04',
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox class="flex" id="checkbox-04" disabled />
            <label oriLabel htmlFor="checkbox-04">Disabled checkbox</label>
        </div>
    `
})
export default class Checkbox04Component {}
