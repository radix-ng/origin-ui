import { Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/ui/badge';

@Component({
    selector: 'demo-badge-01',
    imports: [OriBadgeComponent],
    template: `
        <ori-badge>Badge</ori-badge>
    `
})
export default class Badge01Component {}
