import { Component } from '@angular/core';

import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriLabel } from '~/registry/default/ui/label';

@Component({
    selector: 'demo-checkbox-07',
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox id="id" [checked]="true" />
            <label oriLabel htmlFor="id">
                I agree to the{{ ' ' }}
                <a class="underline" href="https://originui-ng.com" target="_blank">terms of service</a>
            </label>
        </div>
    `
})
export default class Checkbox07 {
    readonly id = 'checkbox-07';
}
