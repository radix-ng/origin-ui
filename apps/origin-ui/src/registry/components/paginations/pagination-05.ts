import { Component, signal } from '@angular/core';
import { OriPagination, OriPaginationNext, OriPaginationPrevious } from '~/registry/ui/pagination';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-05',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule
    ],
    template: `
        <!-- Pagination -->
        <nav
            class="gap-3"
            [page]="currentPage()"
            [total]="totalItems"
            [itemsPerPage]="itemsPerPage"
            (updatePage)="currentPage.set($event)"
            oriPagination
            siblingCount="0"
            showEdges
        >
            <ul class="flex items-center gap-3" #list="rdxPaginationList" rdxPaginationList>
                <button oriPaginationPrevious size="icon">
                    <lucide-angular [img]="ChevronLeft" aria-hidden="true" size="16" strokeWidth="2" />
                </button>
                <p class="text-muted-foreground text-sm" aria-live="polite">
                    Page
                    <span class="text-foreground">{{ currentPage() }}</span>
                    of{{ ' ' }}
                    <span class="text-foreground">{{ totalPages }}</span>
                </p>
                <button oriPaginationNext size="icon">
                    <lucide-angular [img]="ChevronRight" aria-hidden="true" size="16" strokeWidth="2" />
                </button>
            </ul>
        </nav>
    `
})
export default class Pagination05Component {
    readonly currentPage = signal<number>(2);

    readonly totalItems = 100;
    readonly itemsPerPage = 10;

    readonly totalPages = Math.max(1, Math.ceil(this.totalItems / (this.itemsPerPage || 1)));

    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;
}
