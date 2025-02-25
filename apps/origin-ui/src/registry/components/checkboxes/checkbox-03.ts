import { Component } from '@angular/core';

import { NgStyle } from '@angular/common';
import { OriCheckbox } from '~/registry/ui/checkbox';
import { OriLabel } from '~/registry/ui/label';

@Component({
    selector: 'demo-checkbox-03',
    imports: [OriCheckbox, OriLabel, NgStyle],
    template: `
        <div
            class="flex items-center gap-2"
            [ngStyle]="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }"
        >
            <ori-checkbox class="flex" id="checkbox-03" defaultChecked />
            <label oriLabel htmlFor="checkbox-03">Colored checkbox</label>
        </div>
    `
})
export default class Checkbox03Component {}
