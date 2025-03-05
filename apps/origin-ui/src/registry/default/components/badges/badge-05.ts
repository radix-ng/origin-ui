import { Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/default/ui/badge';

@Component({
    selector: 'demo-badge-05',
    imports: [OriBadgeComponent],
    template: `
        <a href="#" oriBadge>Link</a>
    `
})
export default class Badge05 {}
