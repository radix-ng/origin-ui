import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSelectNative } from '~/registry/ui/select-native';

@Component({
    selector: 'demo-select-01',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="flex flex-col gap-2">
            <label [htmlFor]="'select-01'" oriLabel>Simple select (native)</label>
            <ori-select-native [id]="'select-01'">
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
        </div>
    `
})
export default class Select01Component {}
