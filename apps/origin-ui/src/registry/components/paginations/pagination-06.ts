import { Component, signal } from '@angular/core';
import { buttonVariants } from '~/registry/ui/button';
import {
    OriPagination,
    OriPaginationEllipsis,
    OriPaginationLink,
    OriPaginationNext,
    OriPaginationPrevious
} from '~/registry/ui/pagination';
import { cn } from '~/registry/lib/utils';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-06',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule,
        OriPaginationEllipsis,
        OriPaginationLink
    ],
    template: `
        <!-- Pagination -->
        <nav
            [page]="currentPage()"
            [total]="totalItems"
            [itemsPerPage]="itemsPerPage"
            (updatePage)="currentPage.set($event)"
            oriPagination
            siblingCount="0"
            showEdges
        >
            <ul
                class="inline-flex items-center gap-0 -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
                #list="rdxPaginationList"
                rdxPaginationList
            >
                <button
                    [class]="
                        cn(
                            buttonVariants({
                                variant: 'outline'
                            }),
                            'rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50'
                        )
                    "
                    oriPaginationPrevious
                    size="icon"
                >
                    <lucide-angular [img]="ChevronLeft" aria-hidden="true" size="16" strokeWidth="2" />
                </button>
                @for (item of list.transformedRange(); track $index) {
                    <li>
                        @if (item.type == 'page') {
                            <a
                                [class]="
                                    cn(
                                        buttonVariants({
                                            variant: 'outline'
                                        }),
                                        'rounded-none shadow-none focus-visible:z-10',
                                        item.value === currentPage() && 'bg-accent'
                                    )
                                "
                                [value]="item.value"
                                [active]="currentPage() === item.value"
                                oriPaginationLink
                            >
                                {{ item?.value }}
                            </a>
                        } @else {
                            <ori-pagination-ellipsis
                                [classStyle]="
                                    cn(
                                        buttonVariants({
                                            variant: 'outline'
                                        }),
                                        'pointer-events-none rounded-none shadow-none'
                                    )
                                "
                            />
                        }
                    </li>
                }
                <button
                    [class]="
                        cn(
                            buttonVariants({
                                variant: 'outline'
                            }),
                            'rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50'
                        )
                    "
                    oriPaginationNext
                    size="icon"
                >
                    <lucide-angular [img]="ChevronRight" aria-hidden="true" size="16" strokeWidth="2" />
                </button>
            </ul>
        </nav>
    `
})
export default class Pagination06Component {
    readonly currentPage = signal<number>(2);

    readonly totalItems = 100;
    readonly itemsPerPage = 10;

    readonly totalPages = Math.max(1, Math.ceil(this.totalItems / (this.itemsPerPage || 1)));

    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;
    protected readonly cn = cn;
    protected readonly buttonVariants = buttonVariants;
}
