import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'demo-button-03',
    standalone: true,
    imports: [OriButton],
    template: `
        <ori-button class="rounded-full">Button</ori-button>
    `
})
export default class Button03Component {}
