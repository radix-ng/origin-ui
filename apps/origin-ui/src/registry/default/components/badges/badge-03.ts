import { Component } from '@angular/core';
import { LucideAngularModule, Zap } from 'lucide-angular';
import { OriBadgeComponent } from '~/registry/default/ui/badge';

@Component({
    selector: 'demo-badge-03',
    imports: [OriBadgeComponent, LucideAngularModule],
    template: `
        <ori-badge>
            <lucide-angular class="-ms-0.5 opacity-60" [img]="Zap" size="12" aria-hidden="true" />
            Badge
        </ori-badge>
    `
})
export default class Badge03 {
    protected readonly Zap = Zap;
}
