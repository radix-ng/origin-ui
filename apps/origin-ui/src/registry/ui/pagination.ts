import { ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { buttonVariants, OriButtonSize, OriButtonVariant } from '~/registry/ui/button';
import { cn } from '~/registry/lib/utils';
import {
    RdxPaginationFirstDirective,
    RdxPaginationLastDirective,
    RdxPaginationListItemDirective,
    RdxPaginationNextDirective,
    RdxPaginationPrevDirective,
    RdxPaginationRootDirective
} from '@radix-ng/primitives/pagination';
import { ClassValue } from 'clsx';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

// as nav
@Directive({
    selector: '[oriPagination]',
    hostDirectives: [
        {
            directive: RdxPaginationRootDirective,
            inputs: ['disabled', 'defaultPage', 'page', 'itemsPerPage', 'showEdges', 'siblingCount', 'total'],
            outputs: ['updatePage']
        }
    ],
    host: {
        role: 'navigation',
        '[attr.aria-label]': '"pagination"',
        '[class]': 'hostClasses()'
    }
})
export class OriPagination {
    readonly class = input<ClassValue>();

    protected hostClasses = computed(() => cn('mx-auto flex w-full justify-center', this.class()));
}

// as a
@Directive({
    selector: '[oriPaginationLink]',
    hostDirectives: [
        {
            directive: RdxPaginationListItemDirective,
            inputs: ['value']
        }
    ],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriPaginationLink {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    readonly active = input<boolean>(false);

    protected hostClasses = computed(() =>
        cn(
            buttonVariants({
                variant: this.active() ? 'outline' : 'ghost',
                size: this.size()
            }),
            this.class()
        )
    );
}

@Component({
    selector: 'ori-pagination-ellipsis',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        LucideAngularModule
    ],
    template: `
        <span [class]="computedClass()" aria-hidden="true">
            <lucide-angular [img]="MoreHorizontal" size="16" strokeWidth="2" />
            <span class="sr-only">More pages</span>
        </span>
    `
})
export class OriPaginationEllipsis {
    readonly classStyle = input<ClassValue>();

    protected computedClass = computed(() => cn('flex h-9 w-9 items-center justify-center', this.classStyle()));
    protected readonly MoreHorizontal = MoreHorizontal;
}

@Directive({
    selector: '[oriPaginationNext]',
    hostDirectives: [RdxPaginationNextDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriPaginationNext {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    readonly variant = input<OriButtonVariant>('ghost');

    protected hostClasses = computed(() =>
        cn(
            buttonVariants({
                variant: this.variant(),
                size: this.size()
            }),
            this.class()
        )
    );
}

@Directive({
    selector: '[oriPaginationPrevious]',
    hostDirectives: [RdxPaginationPrevDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriPaginationPrevious {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    readonly variant = input<OriButtonVariant>('ghost');

    protected hostClasses = computed(() =>
        cn(
            buttonVariants({
                variant: this.variant(),
                size: this.size()
            }),
            this.class()
        )
    );
}

@Directive({
    selector: '[oriPaginationFirst]',
    hostDirectives: [RdxPaginationFirstDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriPaginationFirst {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected hostClasses = computed(() =>
        cn(
            buttonVariants({
                variant: 'ghost',
                size: this.size()
            }),
            this.class()
        )
    );
}

@Directive({
    selector: '[oriPaginationLast]',
    hostDirectives: [RdxPaginationLastDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriPaginationLast {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected readonly hostClasses = computed(() =>
        cn(
            buttonVariants({
                variant: 'ghost',
                size: this.size()
            }),
            this.class()
        )
    );
}
