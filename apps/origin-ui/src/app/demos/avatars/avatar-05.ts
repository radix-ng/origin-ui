import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent } from '@origin-ui/components/avatar';

@Component({
    selector: 'demo-avatar-05',
    standalone: true,
    imports: [OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent],
    template: `
        <div class="relative">
            <ori-avatar class="rounded-lg">
                <ori-avatar-image [src]="'./avatar-80-07.jpg'" [imgAlt]="'Kelly King'" />
                <ori-avatar-fallback>KK</ori-avatar-fallback>
            </ori-avatar>
            <span class="border-background absolute bottom-0 end-0 size-3 rounded-full border-2 bg-emerald-500">
                <span class="sr-only">Online</span>
            </span>
        </div>
    `
})
export default class Avatar05Component {}
