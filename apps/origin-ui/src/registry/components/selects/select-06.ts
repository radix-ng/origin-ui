import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSelectNative } from '~/registry/ui/select-native';

@Component({
    selector: 'demo-select-06',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="[&_svg]:text-destructive/80 flex flex-col gap-2">
            <label [htmlFor]="'select-06'" oriLabel>Select with error (native)</label>
            <ori-select-native
                [id]="'select-06'"
                className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
            >
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
            <p class="text-destructive text-xs" role="alert" aria-live="polite">Selected option is invalid</p>
        </div>
    `
})
export default class Select06Component {}
