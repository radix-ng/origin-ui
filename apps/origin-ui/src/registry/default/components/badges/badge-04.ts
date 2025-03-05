import { Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/default/ui/badge';

@Component({
    selector: 'demo-badge-04',
    imports: [OriBadgeComponent],
    template: `
        <ori-badge class="min-w-5 px-1">6</ori-badge>
    `
})
export default class Badge04 {}
