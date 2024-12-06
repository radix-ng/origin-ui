import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'demo-button-01',
    standalone: true,
    imports: [OriButton],
    template: `
        <ori-button>Button</ori-button>
    `
})
export default class Button01Component {}
