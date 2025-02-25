import { Component, signal } from '@angular/core';
import { OriInput } from '~/registry/default/ui/input';
import { OriLabel } from '~/registry/default/ui/label';
import {
    OriPagination,
    OriPaginationEllipsis,
    OriPaginationLink,
    OriPaginationNext,
    OriPaginationPrevious
} from '~/registry/default/ui/pagination';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-04',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule,
        OriLabel,
        OriInput,
        OriPaginationEllipsis,
        OriPaginationLink
    ],
    template: `
        <div class="flex items-center justify-between gap-4">
            <!-- Pagination -->
            <div>
                <nav
                    class="w-auto"
                    [page]="currentPage()"
                    [total]="totalItems"
                    [itemsPerPage]="itemsPerPage"
                    (updatePage)="currentPage.set($event)"
                    oriPagination
                    siblingCount="0"
                    showEdges
                >
                    <ul class="flex items-center gap-3" #list="rdxPaginationList" rdxPaginationList>
                        <button oriPaginationPrevious>
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

                        <button oriPaginationNext>
                            <lucide-angular [img]="ChevronRight" aria-hidden="true" size="16" strokeWidth="2" />
                        </button>
                    </ul>
                </nav>
            </div>

            <!-- Go to page input -->
            <div class="flex items-center gap-3">
                <label class="whitespace-nowrap" [htmlFor]="id" oriLabel>To page</label>
                <input
                    class="w-14"
                    [id]="id"
                    [value]="String(currentPage())"
                    (valueChange)="currentPage.set(Number($event))"
                    oriInput
                    type="text"
                />
            </div>
        </div>
    `
})
export default class Pagination04Component {
    id = 'demo-pagination-04';

    readonly currentPage = signal<number>(2);

    readonly totalItems = 100;
    readonly itemsPerPage = 10;

    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;

    protected readonly Number = Number;
    protected readonly String = String;
}
