import { Component } from '@angular/core';
import { OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent } from '~/registry/default/ui/avatar';

@Component({
    selector: 'demo-avatar-06',
    imports: [OriAvatarComponent, OriAvatarFallbackComponent, OriAvatarImageComponent],
    template: `
        <div class="relative">
            <ori-avatar class="rounded-lg">
                <ori-avatar-image [src]="'./avatar-80-07.jpg'" [imgAlt]="'Kelly King'" />
                <ori-avatar-fallback>KK</ori-avatar-fallback>
            </ori-avatar>
            <span class="border-background bg-muted-foreground absolute bottom-0 end-0 size-3 rounded-full border-2">
                <span class="sr-only">Offline</span>
            </span>
        </div>
    `
})
export default class Avatar06Component {}
