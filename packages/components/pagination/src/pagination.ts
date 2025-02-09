import { Component, computed, Directive, input } from '@angular/core';
import { buttonVariants, OriButtonSize } from '@origin-ui/components/button';
import { cn } from '@origin-ui/components/utils';
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
        '[class]': 'computedClass()'
    }
})
export class OriPagination {
    readonly class = input<ClassValue>();

    protected computedClass = computed(() => cn('mx-auto flex w-full justify-center', this.class()));
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
        '[class]': 'computedClass()'
    }
})
export class OriPaginationLink {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    readonly active = input<boolean>(false);

    protected computedClass = computed(() =>
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
        '[class]': 'computedClass()'
    }
})
export class OriPaginationNext {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected computedClass = computed(() =>
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
    selector: '[oriPaginationPrevious]',
    hostDirectives: [RdxPaginationPrevDirective],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriPaginationPrevious {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected computedClass = computed(() =>
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
    selector: '[oriPaginationFirst]',
    hostDirectives: [RdxPaginationFirstDirective],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriPaginationFirst {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected computedClass = computed(() =>
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
        '[class]': 'computedClass()'
    }
})
export class OriPaginationLast {
    readonly class = input<ClassValue>();

    readonly size = input<OriButtonSize>('default');

    protected computedClass = computed(() =>
        cn(
            buttonVariants({
                variant: 'ghost',
                size: this.size()
            }),
            this.class()
        )
    );
}
