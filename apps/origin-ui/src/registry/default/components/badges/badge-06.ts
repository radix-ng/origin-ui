import { Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/default/ui/badge';

@Component({
    selector: 'demo-badge-06',
    imports: [OriBadgeComponent],
    template: `
        <ori-badge class="items-baseline gap-1.5">
            Badge
            <span class="text-primary-foreground/60 text-[0.625rem] font-medium">73</span>
        </ori-badge>
    `
})
export default class Badge06 {}
