import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent } from '@origin-ui/components/avatar';

@Component({
    selector: 'demo-avatar-01',
    standalone: true,
    imports: [OriAvatarComponent, OriAvatarImageComponent, OriAvatarFallbackComponent],
    template: `
        <ori-avatar>
            <ori-avatar-image [src]="'./avatar-80-07.jpg'" [imgAlt]="'Kelly King'" />
            <ori-avatar-fallback>KK</ori-avatar-fallback>
        </ori-avatar>
    `
})
export default class Avatar01Component {}
