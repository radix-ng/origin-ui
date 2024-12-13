import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent } from '@origin-ui/components/avatar';
import { LucideAngularModule, UserRound } from 'lucide-angular';

@Component({
    selector: 'demo-avatar-03',
    standalone: true,
    imports: [OriAvatarComponent, OriAvatarFallbackComponent, LucideAngularModule],
    template: `
        <ori-avatar>
            <ori-avatar-fallback>
                <lucide-angular class="opacity-60" [img]="UserRoundIcon" size="16" strokeWidth="2" aria-hidden="true" />
            </ori-avatar-fallback>
        </ori-avatar>
    `
})
export default class Avatar03Component {
    protected readonly UserRoundIcon = UserRound;
}
