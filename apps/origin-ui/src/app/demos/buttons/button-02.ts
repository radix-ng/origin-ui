import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'demo-button-02',
    imports: [OriButton],
    template: `
        <ori-button disabled>Button</ori-button>
    `
})
export default class Button02Component {}
