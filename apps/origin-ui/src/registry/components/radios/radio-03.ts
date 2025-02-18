import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/ui/radio-group';

@Component({
    selector: 'demo-radio-03',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem],
    template: `
        <ori-radio-group [value]="'r2'" disabled>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r1'" [forId]="'radio-03-r1'" />
                <label [htmlFor]="'radio-03-r1'" oriLabel>Option 1</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r2'" [forId]="'radio-03-r2'" />
                <label [htmlFor]="'radio-03-r2'" oriLabel>Option 2</label>
            </div>
            <div class="flex items-center gap-2">
                <ori-radio-group-item [value]="'r3'" [forId]="'radio-03-r3'" />
                <label [htmlFor]="'radio-03-r3'" oriLabel>Option 2</label>
            </div>
        </ori-radio-group>
    `
})
export default class Radio03Component {}
