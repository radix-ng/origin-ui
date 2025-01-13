import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';
import { createCharacterLimit } from '../../hooks/use-character-limit';

@Component({
    selector: 'demo-input-35',
    imports: [OriInput, OriLabel],
    template: `
        <div class="space-y-2">
            <ori-label [htmlFor]="'input-35'">Input with characters left</ori-label>
            <ori-input
                class="block"
                [value]="signals.value()"
                [maxLength]="maxLength"
                [id]="'input-35'"
                (valueChange)="signals.handleChange($event)"
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
