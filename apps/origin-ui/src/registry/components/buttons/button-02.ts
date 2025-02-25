import { Component } from '@angular/core';
import { OriButton } from '~/registry/ui/button';

@Component({
    selector: 'demo-button-02',
    imports: [OriButton],
    template: `
        <button oriButton disabled>Button</button>
    `
})
export default class Button02Component {}
