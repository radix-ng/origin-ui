import { Component, signal } from '@angular/core';
import {
    OriPagination,
    OriPaginationEllipsis,
    OriPaginationFirst,
    OriPaginationLast,
    OriPaginationLink,
    OriPaginationNext,
    OriPaginationPrevious
} from '~/registry/ui/pagination';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-02',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationLink,
        OriPaginationEllipsis,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule,
        OriPaginationLast,
        OriPaginationFirst
    ],
    template: `
        <nav
            [page]="currentPage()"
            (updatePage)="currentPage.set($event)"
            oriPagination
            total="100"
            siblingCount="1"
            showEdges
            itemsPerPage="10"
        >
            <ul class="flex items-center gap-1" #list="rdxPaginationList" rdxPaginationList>
                <button oriPaginationFirst size="icon">
                    <lucide-icon [img]="ChevronFirst" size="16" strokeWidth="2" />
                </button>
                <button oriPaginationPrevious size="icon">
                    <lucide-angular [img]="ChevronLeft" aria-hidden="true" size="16" strokeWidth="2" />
                </button>

                @for (item of list.transformedRange(); track $index) {
                    <li>
                        @if (item.type == 'page') {
                            <a [value]="item.value" [active]="currentPage() === item.value" oriPaginationLink>
                                {{ item?.value }}
                            </a>
                        } @else {
                            <ori-pagination-ellipsis />
                        }
                    </li>
                }

                <button oriPaginationNext size="icon">
                    <lucide-angular [img]="ChevronRight" aria-hidden="true" size="16" strokeWidth="2" />
                </button>
                <button oriPaginationLast size="icon">
                    <lucide-icon [img]="ChevronLast" size="16" strokeWidth="2" />
                </button>
            </ul>
        </nav>
    `
})
export default class Pagination02Component {
    readonly currentPage = signal<number>(2);

    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;

    protected readonly ChevronFirst = ChevronFirst;
    protected readonly ChevronLast = ChevronLast;
}
