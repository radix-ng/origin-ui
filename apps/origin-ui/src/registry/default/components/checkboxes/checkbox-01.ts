import { Component } from '@angular/core';

import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriLabel } from '~/registry/default/ui/label';

@Component({
    selector: 'demo-checkbox-01',
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox id="checkbox-01" [checked]="true" />
            <label oriLabel htmlFor="checkbox-01">Simple checkbox</label>
        </div>
    `
})
export default class Checkbox01Component {}
