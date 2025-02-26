import { Component } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import { OriLabel } from '~/registry/default/ui/label';
import { OriTextarea } from '~/registry/default/ui/textarea';

@Component({
    selector: 'demo-textarea-68',
    imports: [OriLabel, OriTextarea, OriButton],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="textarea-68">Textarea with left button</label>
            <textarea id="textarea-68" oriTextarea placeholder="Leave a comment"></textarea>
            <button oriButton variant="outline">Send</button>
        </div>
    `
})
export default class Textarea68Component {}
