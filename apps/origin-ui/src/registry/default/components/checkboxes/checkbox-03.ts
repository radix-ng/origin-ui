import { Component } from '@angular/core';

import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriLabel } from '~/registry/default/ui/label';

@Component({
    selector: 'demo-checkbox-03',
    imports: [OriCheckbox, OriLabel],
    template: `
        <div
            class="[--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
            [class]="'flex items-center gap-2'"
        >
            <ori-checkbox id="checkbox-03" defaultChecked />
            <label oriLabel htmlFor="checkbox-03">Colored checkbox</label>
        </div>
    `
})
export default class Checkbox03Component {}
