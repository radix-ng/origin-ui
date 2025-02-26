import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/default/ui/radio-group';

@Component({
    selector: 'demo-radio-02',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem, NgStyle],
    template: `
        <ori-radio-group [value]="'r1'" [ngStyle]="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }">
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r1'" [forId]="'radio-02-r1'" />
                <label [htmlFor]="'radio-02-r1'" oriLabel>Option 1</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r2'" [forId]="'radio-02-r2'" />
                <label [htmlFor]="'radio-02-r2'" oriLabel>Option 2</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r3'" [forId]="'radio-02-r3'" />
                <label [htmlFor]="'radio-02-r3'" oriLabel>Option 2</label>
            </div>
        </ori-radio-group>
    `
})
export default class Radio02Component {}
