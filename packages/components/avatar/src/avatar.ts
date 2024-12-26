import { Component, computed, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxAvatarFallbackDirective,
    RdxAvatarImageDirective,
    RdxAvatarRootDirective
} from '@radix-ng/primitives/avatar';

@Component({
    selector: 'ori-avatar',
    standalone: true,
    hostDirectives: [RdxAvatarRootDirective],
    host: { '[class]': 'computedClass()' },
    template: `
        <ng-content></ng-content>
    `
})
export class OriAvatarComponent {
    readonly class = input<string>();
    protected computedClass = computed(() =>
        cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', this.class())
    );
}

@Component({
    selector: 'ori-avatar-image',
    imports: [
        RdxAvatarImageDirective
    ],
    template: `
        <img [src]="src()" [alt]="imgAlt()" rdxAvatarImage />
    `
})
export class OriAvatarImageComponent {
    readonly src = input.required<string>();
    readonly imgAlt = input<string>();
}

@Component({
    selector: 'ori-avatar-fallback',
    standalone: true,
    hostDirectives: [RdxAvatarFallbackDirective],
    host: { '[class]': 'computedClass()' },
    template: `
        <ng-content></ng-content>
    `
})
export class OriAvatarFallbackComponent {
    readonly class = input<string>();
    protected computedClass = computed(() =>
        cn('flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary text-xs', this.class())
    );
}
