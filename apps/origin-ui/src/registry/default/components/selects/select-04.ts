import { Component } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { OriSelectNative } from '~/registry/default/ui/select-native';

@Component({
    selector: 'demo-select-04',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="flex flex-col gap-2">
            <label [htmlFor]="'select-04'" oriLabel>Select with helper text (native)</label>
            <ori-select-native [id]="'select-04'">
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
            <p class="text-muted-foreground text-xs" role="region" aria-live="polite">
                Tell us what&lsquo;s your favorite Select framework
            </p>
        </div>
    `
})
export default class Select04Component {}
