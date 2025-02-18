import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriTextarea } from '~/registry/ui/textarea';

@Component({
    selector: 'demo-textarea-59',
    imports: [OriLabel, OriTextarea],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="textarea-59">Simple textarea</label>
            <textarea id="textarea-59" oriTextarea placeholder="Leave a comment"></textarea>
        </div>
    `
})
export default class Textarea59Component {}
