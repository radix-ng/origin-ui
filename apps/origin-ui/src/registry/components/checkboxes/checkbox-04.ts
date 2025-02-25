import { Component } from '@angular/core';

import { OriCheckbox } from '~/registry/ui/checkbox';
import { OriLabel } from '~/registry/ui/label';

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
