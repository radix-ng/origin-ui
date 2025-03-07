import { Component, OnInit, signal } from '@angular/core';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '@origin-ui/components/table';
import { cn } from '@origin-ui/components/utils';
import { RdxPaginationListDirective } from '@radix-ng/primitives/pagination';
import {
    CellContext,
    ColumnDef,
    createAngularTable,
    flexRenderComponent,
    FlexRenderDirective,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    HeaderContext,
    injectFlexRenderContext,
    PaginationState,
    SortingState
} from '@tanstack/angular-table';
import {
    ChevronDown,
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    LucideAngularModule
} from 'lucide-angular';
import { OriBadgeComponent } from '~/registry/default/ui/badge';
import { OriButton } from '~/registry/default/ui/button';
import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriPagination, OriPaginationPrevious } from '~/registry/default/ui/pagination';

type Item = {
    id: string;
    name: string;
    email: string;
    location: string;
    flag: string;
    status: 'Active' | 'Inactive' | 'Pending';
    balance: number;
};

@Component({
    selector: 'demo-table-18',
    imports: [
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        LucideAngularModule,
        FlexRenderDirective,
        OriTableBody,
        OriTableCell,
        OriTable,
        OriTableBody,
        OriTableCell,
        OriTableRow,
        OriPagination,
        RdxPaginationListDirective,
        OriPaginationPrevious,
        OriButton
    ],
    template: `
        <div class="relative w-full overflow-auto">
            <div class="space-y-4">
                <div class="bg-background overflow-hidden rounded-md border">
                    <table class="table-fixed" oriTable>
                        <thead oriTableHeader>
                            @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
                                <tr class="hover:bg-transparent" oriTableRow>
                                    @for (header of headerGroup.headers; track header.id) {
                                        <th class="h-11" [style.width.px]="header.getSize()" oriTableHead>
                                            @if (!header.isPlaceholder) {
                                                <div
                                                    [class]="
                                                        cn(
                                                            header.column.getCanSort() &&
                                                                'flex h-full cursor-pointer items-center justify-between gap-2 select-none'
                                                        )
                                                    "
                                                    [attr.tabIndex]="header.column.getCanSort() ? 0 : undefined"
                                                    (click)="header.column.getToggleSortingHandler()?.($event)"
                                                    (keydown)="onHeaderKeyDown($event, header)"
                                                >
                                                    <span
                                                        class="truncate"
                                                        *flexRender="
                                                            header.column.columnDef.header;
                                                            props: header.getContext();
                                                            let headerValue
                                                        "
                                                    >
                                                        {{ headerValue }}
                                                    </span>
                                                    @switch (header.column.getIsSorted()) {
                                                        @case ('asc') {
                                                            <lucide-angular
                                                                class="shrink-0 opacity-60"
                                                                [img]="ChevronUp"
                                                                size="16"
                                                                aria-hidden="true"
                                                            />
                                                        }

                                                        @case ('desc') {
                                                            <lucide-angular
                                                                class="shrink-0 opacity-60"
                                                                [img]="ChevronDown"
                                                                size="16"
                                                                aria-hidden="true"
                                                            />
                                                        }
                                                    }
                                                </div>
                                            }
                                        </th>
                                    }
                                </tr>
                            }
                        </thead>
                        <tbody oriTableBody>
                            @if (table.getRowModel().rows.length) {
                                @for (row of table.getRowModel().rows; track row.id) {
                                    <tr [attr.data-state]="row.getIsSelected() && 'selected'" oriTableRow>
                                        @for (cell of row.getVisibleCells(); track cell.id) {
                                            <td oriTableCell>
                                                <ng-container
                                                    *flexRender="
                                                        cell.column.columnDef.cell;
                                                        props: cell.getContext();
                                                        let cellValue
                                                    "
                                                >
                                                    <div class="truncate" [innerHTML]="cellValue"></div>
                                                </ng-container>
                                            </td>
                                        }
                                    </tr>
                                }
                            } @else {
                                <tr oriTableRow>
                                    <td class="h-24 text-center" oriTableCell>No results.</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <!-- /* Pagination */-->
                <div class="flex items-center justify-between gap-8">
                    <!--                    /* Results per page */-->
                    <div class="flex items-center gap-3"></div>
                    <!--                    /* Page number information */-->
                    <div class="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap">
                        <p class="text-muted-foreground text-sm whitespace-nowrap" aria-live="polite">
                            <span class="text-foreground">
                                {{
                                    table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1
                                }}-{{ getCurrentPage() }}
                            </span>
                            {{ ' ' }} of
                            <span class="text-foreground">{{ table.getRowCount().toString() }}</span>
                        </p>
                    </div>
                    <!--                    /* Pagination buttons */-->
                    <div>
                        <nav oriPagination>
                            <ul class="flex flex-row items-center gap-1" rdxPaginationList>
                                <li>
                                    <button
                                        class="disabled:pointer-events-none disabled:opacity-50"
                                        [disabled]="!table.getCanPreviousPage()"
                                        (click)="table.firstPage()"
                                        oriButton
                                        variant="outline"
                                        size="icon"
                                        aria-label="Go to first page"
                                    >
                                        <lucide-angular [img]="ChevronFirst" aria-hidden="true" size="16" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="disabled:pointer-events-none disabled:opacity-50"
                                        [disabled]="!table.getCanPreviousPage()"
                                        (click)="table.previousPage()"
                                        oriButton
                                        variant="outline"
                                        size="icon"
                                        aria-label="Go to previous page"
                                    >
                                        <lucide-angular [img]="ChevronLeft" aria-hidden="true" size="16" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        [disabled]="!table.getCanNextPage()"
                                        (click)="table.nextPage()"
                                        oriButton
                                        variant="outline"
                                        size="icon"
                                        aria-label="Go to next page"
                                    >
                                        <lucide-angular [img]="ChevronRight" aria-hidden="true" size="16" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        [disabled]="!table.getCanNextPage()"
                                        (click)="table.lastPage()"
                                        oriButton
                                        variant="outline"
                                        size="icon"
                                        aria-label="Go to last page"
                                    >
                                        <lucide-angular [img]="ChevronLast" aria-hidden="true" size="16" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <p class="text-muted-foreground mt-4 text-center text-sm">
                    Paginated table made with{{ ' ' }}
                    <a
                        class="hover:text-foreground underline"
                        href="https://tanstack.com/table"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TanStack Table
                    </a>
                </p>
            </div>
        </div>
    `
})
export default class Table18 implements OnInit {
    readonly data = signal<Item[]>([]);

    readonly columns: ColumnDef<Item>[] = [
        {
            id: 'select',
            header: () => flexRenderComponent(CheckboxHeader),
            cell: () => flexRenderComponent(CheckboxRow),
            size: 28,
            enableSorting: false
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: ({ row }) => `<div class="font-medium">${row.getValue('name')}</div>`
        },
        {
            header: 'Email',
            accessorKey: 'email',
            size: 200
        },
        {
            header: 'Location',
            accessorKey: 'location',
            cell: ({ row }) =>
                `<div>
                    <span class="text-lg leading-none">${row.original.flag}</span> ${row.getValue('location')}
                 </div>`,
            size: 180
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: () => {
                return flexRenderComponent(StatusRow);
            },
            size: 120
        },
        {
            header: 'Balance',
            accessorKey: 'balance',
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue('balance'));
                const formatted = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(amount);
                return `<div class="text-right">${formatted}</div>`;
            },
            size: 120
        }
    ];

    readonly pagination = signal<PaginationState>({ pageIndex: 0, pageSize: 5 });

    readonly sorting = signal<SortingState>([
        {
            id: 'name',
            desc: false
        }
    ]);

    readonly table = createAngularTable<Item>(() => ({
        data: this.data(),
        columns: this.columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: (updaterOrValue) =>
            typeof updaterOrValue === 'function'
                ? this.sorting.update(updaterOrValue)
                : this.sorting.set(updaterOrValue),
        onPaginationChange: (updater) =>
            typeof updater === 'function' ? this.pagination.update(updater) : this.pagination.set(updater),
        state: {
            sorting: this.sorting(),
            pagination: this.pagination()
        }
    }));

    async ngOnInit() {
        await this.fetchPosts();
    }

    getCurrentPage() {
        return Math.min(
            Math.max(
                this.table.getState().pagination.pageIndex * this.table.getState().pagination.pageSize +
                    this.table.getState().pagination.pageSize,
                0
            ),
            this.table.getRowCount()
        );
    }

    onHeaderKeyDown(e: any, header: any) {
        // Enhanced keyboard handling for sorting
        if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            header.column.getToggleSortingHandler()?.(e);
        }
    }

    private async fetchPosts() {
        const res = await fetch('https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json');
        const data = await res.json();

        this.data.set([...data, ...data]);
    }

    protected readonly cn = cn;
    protected readonly ChevronUp = ChevronUp;
    protected readonly ChevronDown = ChevronDown;
    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;
    protected readonly ChevronFirst = ChevronFirst;
    protected readonly ChevronLast = ChevronLast;
}

@Component({
    imports: [
        OriCheckbox
    ],
    template: `
        <ori-checkbox
            [indeterminate]="
                (!context.table.getIsAllRowsSelected && context.table.getIsAllPageRowsSelected()) ||
                context.table.getIsSomePageRowsSelected()
            "
            (checkedChange)="onCheckedChange($event)"
            aria-label="Select all"
        ></ori-checkbox>
    `
})
class CheckboxHeader<T> {
    context = injectFlexRenderContext<HeaderContext<T, unknown>>();

    onCheckedChange(checked: boolean) {
        this.context.table.toggleAllRowsSelected(checked);
    }
}

@Component({
    imports: [
        OriCheckbox
    ],
    template: `
        <ori-checkbox
            [checked]="context.row.getIsSelected()"
            (checkedChange)="onCheckedChange($event)"
            aria-label="Select row"
        ></ori-checkbox>
    `
})
class CheckboxRow<T> {
    readonly context = injectFlexRenderContext<CellContext<T, unknown>>();

    onCheckedChange(checked: boolean) {
        this.context.row.toggleSelected(checked);
    }
}

@Component({
    imports: [
        OriBadgeComponent
    ],
    template: `
        <ori-badge [class]="cn(context.getValue() === 'Inactive' && 'bg-muted-foreground/60 text-primary-foreground')">
            {{ context.getValue() }}
        </ori-badge>
    `
})
class StatusRow<T> {
    readonly context = injectFlexRenderContext<CellContext<T, unknown>>();
    protected readonly cn = cn;
}
