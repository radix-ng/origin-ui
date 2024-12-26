import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriRadioGroup, OriRadioGroupItem } from '@origin-ui/components/radio-group';

@Component({
    selector: 'demo-radio-03',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem],
    template: `
        <ori-radio-group [value]="'r2'" disabled>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r1'" [forId]="'radio-03-r1'" />
                <ori-label [htmlFor]="'radio-03-r1'">Option 1</ori-label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r2'" [forId]="'radio-03-r2'" />
                <ori-label [htmlFor]="'radio-03-r2'">Option 2</ori-label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r3'" [forId]="'radio-03-r3'" />
                <ori-label [htmlFor]="'radio-03-r3'">Option 2</ori-label>
            </div>
        </ori-radio-group>
    `
})
export default class Radio03Component {}
