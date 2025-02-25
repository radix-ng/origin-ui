import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriTextarea } from '~/registry/ui/textarea';

@Component({
    selector: 'demo-textarea-77',
    imports: [OriLabel, OriTextarea],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="textarea-77">Autogrowing textarea</label>
            <textarea
                class="min-h-[none] resize-none"
                id="textarea-77"
                [rows]="defaultRows"
                (input)="handleInput($event)"
                oriTextarea
                placeholder="Leave a comment"
            ></textarea>
        </div>
    `
})
export default class Textarea77Component {
    defaultRows = 1;
    maxRows = undefined; // You can set a max number of rows

    handleInput($event: Event) {
        const textareaElement = $event.target as HTMLInputElement;
        textareaElement.style.height = 'auto';

        const style = window.getComputedStyle(textareaElement);
        const borderHeight = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
        const paddingHeight = parseInt(style.paddingTop) + parseInt(style.paddingBottom);

        const lineHeight = parseInt(style.lineHeight);
        const maxHeight = this.maxRows ? lineHeight * this.maxRows + borderHeight + paddingHeight : Infinity;

        const newHeight = Math.min(textareaElement.scrollHeight + borderHeight, maxHeight);

        textareaElement.style.height = `${newHeight}px`;
    }
}
