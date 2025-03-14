import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { OriSelectNative } from '~/registry/default/ui/select-native';

@Component({
    selector: 'demo-select-01',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="*:not-first:mt-2">
            <label [htmlFor]="'select-01'" oriLabel>Simple select (native)</label>
            <ori-select-native [id]="'select-01'">
                <option value="1">React</option>
                <option value="2">Next.js</option>
                <option value="3">Astro</option>
                <option value="4">Gatsby</option>
            </ori-select-native>
        </div>
    `
})
export default class Select01Component {}
