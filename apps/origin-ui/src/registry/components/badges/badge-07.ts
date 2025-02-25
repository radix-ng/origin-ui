import { Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/ui/badge';
import { Check, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-badge-07',
    imports: [OriBadgeComponent, LucideAngularModule],
    template: `
        <ori-badge class="gap-1.5" variant="outline">
            <lucide-angular class="text-emerald-500" [img]="CheckIcon" size="12" strokeWidth="2" aria-hidden="true" />
            Badge
        </ori-badge>
    `
})
export default class Badge07Component {
    protected readonly CheckIcon = Check;
}
