import { Component } from '@angular/core';
import { OriInput } from '~/registry/ui/input';
import { OriLabel } from '~/registry/ui/label';
import { createCharacterLimit } from '~/registry/lib/use-character-limit';

@Component({
    selector: 'demo-input-35',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-35">Input with characters left</label>
            <input
                [value]="signals.value()"
                [maxLength]="maxLength"
                [id]="'input-35'"
                (valueChange)="signals.handleChange($event)"
                oriInput
                placeholder="Email"
                type="text"
                aria-describedby="input-35-description"
            />
            <p class="text-muted-foreground mt-2 text-xs" id="input-35-description" role="status" aria-live="polite">
                <span class="tabular-nums">{{ signals.maxLength - signals.characterCount() }}</span>
                characters left
            </p>
        </div>
    `
})
export default class Input35Component {
    maxLength = 8;

    signals = createCharacterLimit({ maxLength: this.maxLength });
}
