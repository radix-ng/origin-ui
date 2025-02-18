import { Component, computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/lib/utils';
import { ChevronRight, LucideAngularModule, MoreHorizontal } from 'lucide-angular';

@Directive({
    selector: 'nav[oriBreadcrumb]',
    host: {
        '[attr.aria-label]': '"breadcrumb"'
    }
})
export class OriBreadcrumbDirective {}

@Directive({
    selector: 'ol[oriBreadcrumbList]',
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbListDirective {
    readonly class = input<string>();

    protected computedClass = computed(() =>
        cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', this.class())
    );
}

@Directive({
    selector: 'li[oriBreadcrumbItem]',
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbItemDirective {
    readonly class = input<string>();

    protected computedClass = computed(() => cn('inline-flex items-center gap-1.5', this.class()));
}

@Directive({
    selector: '[oriBreadcrumbLink], a[oriBreadcrumbLink]',
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbLinkDirective {
    readonly class = input<string>();

    protected computedClass = computed(() => cn('transition-colors hover:text-foreground', this.class()));
}

@Directive({
    selector: 'span[oriBreadcrumbPage]',
    host: {
        role: 'link',
        '[attr.aria-disabled]': 'true',
        '[attr.aria-current]': '"page"',
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbPageDirective {
    readonly class = input<string>();

    protected computedClass = computed(() => cn('text-foreground', this.class()));
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'li[oriBreadcrumbSeparator]',
    imports: [LucideAngularModule],
    template: `
        <span #ref>
            <ng-content />
        </span>
        @if (ref.children.length === 0) {
            <lucide-angular class="flex" [img]="ChevronRight" strokeWidth="2" size="16" />
        }
    `,
    host: {
        role: 'presentation',
        '[attr.aria-hidden]': 'true',
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbSeparatorComponent {
    readonly class = input<string>();

    protected computedClass = computed(() => cn('[&>svg]:size-3.5', this.class()));
    protected readonly ChevronRight = ChevronRight;
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'span[oriBreadcrumbEllipsis]',
    imports: [LucideAngularModule],
    template: `
        <lucide-angular [img]="MoreHorizontal" />
    `,
    host: {
        role: 'presentation',
        '[attr.aria-hidden]': 'true',
        '[class]': 'computedClass()'
    }
})
export class OriBreadcrumbEllipsisComponent {
    readonly class = input<string>();

    protected computedClass = computed(() => cn('flex size-5 items-center justify-center', this.class()));
    protected readonly MoreHorizontal = MoreHorizontal;
}
