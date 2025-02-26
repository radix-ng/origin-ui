import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent } from '~/registry/default/ui/avatar';

@Component({
    selector: 'demo-avatar-01',
    imports: [OriAvatarComponent, OriAvatarImageComponent, OriAvatarFallbackComponent],
    template: `
        <ori-avatar>
            <ori-avatar-image [src]="'./avatar-80-07.jpg'" [imgAlt]="'Kelly King'" />
            <ori-avatar-fallback>KK</ori-avatar-fallback>
        </ori-avatar>
    `
})
export default class Avatar01Component {}
