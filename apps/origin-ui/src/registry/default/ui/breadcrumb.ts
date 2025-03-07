import { ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
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
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbListDirective {
    readonly class = input<string>();

    protected hostClasses = computed(() =>
        cn('text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5', this.class())
    );
}

@Directive({
    selector: 'li[oriBreadcrumbItem]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbItemDirective {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('inline-flex items-center gap-1.5', this.class()));
}

@Directive({
    selector: '[oriBreadcrumbLink], a[oriBreadcrumbLink]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbLinkDirective {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('transition-colors hover:text-foreground', this.class()));
}

@Directive({
    selector: 'span[oriBreadcrumbPage]',
    host: {
        role: 'link',
        '[attr.aria-disabled]': 'true',
        '[attr.aria-current]': '"page"',
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbPageDirective {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('text-foreground font-normal', this.class()));
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'li[oriBreadcrumbSeparator]',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbSeparatorComponent {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('[&>svg]:size-3.5', this.class()));
    protected readonly ChevronRight = ChevronRight;
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'span[oriBreadcrumbEllipsis]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule],
    template: `
        <lucide-angular [img]="MoreHorizontal" size="16" />
        <span class="sr-only">More</span>
    `,
    host: {
        role: 'presentation',
        '[attr.aria-hidden]': 'true',
        '[class]': 'hostClasses()'
    }
})
export class OriBreadcrumbEllipsisComponent {
    readonly class = input<string>();

    protected hostClasses = computed(() => cn('flex size-5 items-center justify-center', this.class()));
    protected readonly MoreHorizontal = MoreHorizontal;
}
