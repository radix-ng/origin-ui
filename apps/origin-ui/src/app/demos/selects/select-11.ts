import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSelectNative } from '@origin-ui/components/select-native';

@Component({
    selector: 'demo-select-11',
    standalone: true,
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="flex flex-col gap-2">
            <ori-label [htmlFor]="'select-11'">Select with option groups (native)</ori-label>
            <ori-select-native [id]="'select-11'">
                <optgroup label="Frontend">
                    <option value="s1">React</option>
                    <option value="s2">Vue</option>
                    <option value="s3">Angular</option>
                </optgroup>
                <optgroup label="Backend">
                    <option value="s4">Node.js</option>
                    <option value="s5">Python</option>
                    <option value="s6">Java</option>
                </optgroup>
            </ori-select-native>
        </div>
    `
})
export default class Select11Component {}
