import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent } from '~/registry/ui/avatar';
import { OriBadgeComponent } from '~/registry/ui/badge';

@Component({
    selector: 'demo-avatar-09',
    imports: [OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent, OriBadgeComponent],
    template: `
        <div class="relative">
            <ori-avatar class="rounded-lg">
                <ori-avatar-image [src]="'./avatar-80-07.jpg'" [imgAlt]="'Kelly King'" />
                <ori-avatar-fallback>KK</ori-avatar-fallback>
            </ori-avatar>
            <ori-badge class="border-background absolute -top-1 left-full min-w-5 -translate-x-4 px-1">6</ori-badge>
        </div>
    `
})
export default class Avatar09Component {}
