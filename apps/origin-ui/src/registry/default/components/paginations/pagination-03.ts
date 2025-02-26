import { Component, signal } from '@angular/core';
import { OriPagination, OriPaginationNext, OriPaginationPrevious } from '~/registry/default/ui/pagination';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-pagination-03',
    imports: [
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationNext,
        OriPaginationPrevious,
        LucideAngularModule
    ],
    template: `
        <div class="flex items-center justify-between gap-3">
            <p class="text-muted-foreground grow text-sm" aria-live="polite">
                Page
                <span class="text-foreground">{{ currentPage() }}</span>
                of{{ ' ' }}
                <span class="text-foreground">{{ pageCount }}</span>
            </p>

            <nav
                class="w-auto"
                [page]="currentPage()"
                [total]="totalItems"
                [itemsPerPage]="itemsPerPage"
                (updatePage)="currentPage.set($event)"
                oriPagination
                siblingCount="1"
                showEdges
            >
                <ul class="flex items-center gap-3" rdxPaginationList>
                    <button oriPaginationPrevious variant="outline">Previous</button>

                    <button oriPaginationNext variant="outline">Next</button>
                </ul>
            </nav>
        </div>
    `
})
export default class Pagination03Component {
    readonly currentPage = signal<number>(2);

    readonly totalItems = 100;
    readonly itemsPerPage = 10;

    readonly pageCount = Math.max(1, Math.ceil(this.totalItems / (this.itemsPerPage || 1)));
}
