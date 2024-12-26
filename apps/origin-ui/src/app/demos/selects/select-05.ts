import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSelectNative } from '@origin-ui/components/select-native';

@Component({
    selector: 'demo-select-05',
    imports: [OriSelectNative, OriLabel, NgStyle],
    template: `
        <div class="flex flex-col gap-2" [ngStyle]="{ '--ring': '234 89% 74%' }">
            <ori-label [htmlFor]="'select-05'">Select with colored border (native)</ori-label>
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
