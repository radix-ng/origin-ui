import { Component, signal } from '@angular/core';
import {
    OriPagination,
    OriPaginationEllipsis,
    OriPaginationLink,
    OriPaginationNext,
    OriPaginationPrevious
} from '~/registry/ui/pagination';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-01',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationLink,
        OriPaginationEllipsis,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule
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
                <button class="gap-1 pl-2.5" oriPaginationPrevious>
                    <lucide-angular [img]="ChevronLeft" size="16" strokeWidth="2" />
                    <span>Previous</span>
                </button>

                @for (item of list.transformedRange(); track $index) {
                    <li>
                        @if (item.type == 'page') {
                            <button [value]="item.value" [active]="currentPage() === item.value" oriPaginationLink>
                                {{ item?.value }}
                            </button>
                        } @else {
                            <ori-pagination-ellipsis />
                        }
                    </li>
                }

                <button class="gap-1 pr-2.5" oriPaginationNext>
                    <span>Next</span>
                    <lucide-angular [img]="ChevronRight" size="16" strokeWidth="2" />
                </button>
            </ul>
        </nav>
    `
})
export default class Pagination01Component {
    readonly currentPage = signal<number>(2);

    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;
}
