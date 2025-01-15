import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriRadioGroup, OriRadioGroupItem } from '@origin-ui/components/radio-group';

@Component({
    selector: 'demo-radio-01',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem],
    template: `
        <ori-radio-group [value]="'r1'">
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r1'" [forId]="'radio-01-r1'" />
                <label oriLabel htmlFor="radio-01-r1">Option 1</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r2'" [forId]="'radio-01-r2'" />
                <label oriLabel htmlFor="radio-01-r2">Option 2</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r3'" [forId]="'radio-01-r3'" />
                <label oriLabel htmlFor="radio-01-r3">Option 2</label>
            </div>
        </ori-radio-group>
    `
})
export default class Radio01Component {}
