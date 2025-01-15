import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriLabel } from '@origin-ui/components/label';
import { OriTextarea } from '@origin-ui/components/textarea';

@Component({
    selector: 'demo-textarea-68',
    imports: [OriLabel, OriTextarea, OriButton],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="textarea-68">Textarea with left button</label>
            <textarea id="textarea-68" oriTextarea placeholder="Leave a comment"></textarea>
            <ori-button class="flex" variant="outline">Send</ori-button>
        </div>
    `
})
export default class Textarea68Component {}
