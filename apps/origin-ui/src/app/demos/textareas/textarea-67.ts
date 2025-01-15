import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriTextarea } from '@origin-ui/components/textarea';

@Component({
    selector: 'demo-textarea-67',
    imports: [OriLabel, OriTextarea],
    template: `
        <div class="space-y-2">
            <ori-label htmlFor="textarea-67">Disabled textarea</ori-label>
            <textarea id="textarea-67" oriTextarea disabled placeholder="Leave a comment"></textarea>
        </div>
    `
})
export default class Textarea67Component {}
