import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { OriSelectNative } from '~/registry/default/ui/select-native';

@Component({
    selector: 'demo-select-05',
    imports: [OriSelectNative, OriLabel, NgStyle],
    template: `
        <div class="flex flex-col gap-2" [ngStyle]="{ '--ring': '234 89% 74%' }">
            <label [htmlFor]="'select-05'" oriLabel>Select with colored border (native)</label>
            <ori-select-native [id]="'select-05'">
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
        </div>
    `
})
export default class Select05Component {}
