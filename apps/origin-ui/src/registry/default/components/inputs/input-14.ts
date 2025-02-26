import { Component } from '@angular/core';
import { OriInput } from '~/registry/default/ui/input';
import { OriLabel } from '~/registry/default/ui/label';

@Component({
    selector: 'demo-input-14',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-14">Input with start add-on</label>
            <div class="flex rounded-lg shadow-sm shadow-black/5">
                <span
                    class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-lg border px-3 text-sm"
                >
                    https://
                </span>
                <input
                    class="-ms-px rounded-s-none shadow-none"
                    id="input-14"
                    oriInput
                    placeholder="google.com"
                    type="text"
                />
            </div>
        </div>
    `
})
export default class Input14Component {}
