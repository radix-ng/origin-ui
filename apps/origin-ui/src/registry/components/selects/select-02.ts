import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSelectNative } from '~/registry/ui/select-native';

@Component({
    selector: 'demo-select-02',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="flex flex-col gap-2">
            <label [htmlFor]="'select-02'" oriLabel>Select with placeholder (native)</label>
            <ori-select-native [id]="'select-02'">
                <option value="" disabled>Please select a value</option>
                <option value="s1">1 to 5</option>
                <option value="s2">5 to 10</option>
                <option value="s3">More than 10</option>
            </ori-select-native>
        </div>
    `
})
export default class Select02Component {}
