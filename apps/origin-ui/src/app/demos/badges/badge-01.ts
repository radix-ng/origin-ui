import { Component } from '@angular/core';
import { OriBadgeComponent } from '@origin-ui/components/badge';

@Component({
    selector: 'demo-badge-01',
    standalone: true,
    imports: [OriBadgeComponent],
    template: `
        <ori-badge>Badge</ori-badge>
    `
})
export default class Badge01Component {}