import { Component } from '@angular/core';
import { OriButton } from '~/registry/ui/button';

@Component({
    selector: 'demo-button-01',
    imports: [OriButton],
    template: `
        <button oriButton>Button</button>
    `
})
export default class Button01Component {}
