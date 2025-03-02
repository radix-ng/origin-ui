import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
import {
    RdxAvatarFallbackDirective,
    RdxAvatarImageDirective,
    RdxAvatarRootDirective
} from '@radix-ng/primitives/avatar';

@Component({
    selector: 'ori-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [RdxAvatarRootDirective],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content></ng-content>
    `
})
export class OriAvatarComponent {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', this.class())
    );
}

@Component({
    selector: 'ori-avatar-image',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RdxAvatarImageDirective
    ],
    template: `
        <img [src]="src()" [alt]="imgAlt()" [class]="imgClasses()" rdxAvatarImage />
    `
})
export class OriAvatarImageComponent {
    readonly src = input.required<string>();

    readonly imgAlt = input<string>();

    readonly imgClass = input<string>();

    protected readonly imgClasses = computed(() => cn('aspect-square size-full', this.imgClass()));
}

@Component({
    selector: 'ori-avatar-fallback',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [RdxAvatarFallbackDirective],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content></ng-content>
    `
})
export class OriAvatarFallbackComponent {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn('bg-secondary flex size-full items-center justify-center rounded-[inherit] text-xs', this.class())
    );
}
