import { Component } from '@angular/core';
import { OriBadgeComponent } from '@origin-ui/components/badge';

@Component({
    selector: 'demo-badge-02',
    imports: [OriBadgeComponent],
    template: `
        <ori-badge class="rounded">Badge</ori-badge>
    `
})
export default class Badge02Component {}
