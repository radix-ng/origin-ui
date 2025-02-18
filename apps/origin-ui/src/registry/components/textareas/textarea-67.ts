import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriTextarea } from '~/registry/ui/textarea';

@Component({
    selector: 'demo-textarea-67',
    imports: [OriLabel, OriTextarea],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="textarea-67">Disabled textarea</label>
            <textarea id="textarea-67" oriTextarea disabled placeholder="Leave a comment"></textarea>
        </div>
    `
})
export default class Textarea67Component {}
