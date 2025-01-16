import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'demo-button-03',
    imports: [OriButton],
    template: `
        <button class="rounded-full" oriButton>Button</button>
    `
})
export default class Button03Component {}
