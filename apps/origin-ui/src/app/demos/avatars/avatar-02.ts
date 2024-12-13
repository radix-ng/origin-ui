import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent } from '@origin-ui/components/avatar';

@Component({
    selector: 'demo-avatar-02',
    standalone: true,
    imports: [OriAvatarComponent, OriAvatarFallbackComponent],
    template: `
        <ori-avatar>
            <ori-avatar-fallback>KK</ori-avatar-fallback>
        </ori-avatar>
    `
})
export default class Avatar02Component {}
