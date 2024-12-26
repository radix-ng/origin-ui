import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriRadioGroup, OriRadioGroupItem } from '@origin-ui/components/radio-group';

@Component({
    selector: 'demo-radio-02',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem, NgStyle],
    template: `
        <ori-radio-group [value]="'r1'" [ngStyle]="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }">
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r1'" [forId]="'radio-02-r1'" />
                <ori-label [htmlFor]="'radio-02-r1'">Option 1</ori-label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r2'" [forId]="'radio-02-r2'" />
                <ori-label [htmlFor]="'radio-02-r2'">Option 2</ori-label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r3'" [forId]="'radio-02-r3'" />
                <ori-label [htmlFor]="'radio-02-r3'">Option 2</ori-label>
            </div>
        </ori-radio-group>
    `
})
export default class Radio02Component {}
