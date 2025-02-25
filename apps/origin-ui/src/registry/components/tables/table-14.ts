import { Component, OnInit, signal } from '@angular/core';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '~/registry/ui/table';
import { cn } from '~/registry/lib/utils';
import {
    ColumnDef,
    createAngularTable,
    FlexRenderDirective,
    getCoreRowModel,
    getSortedRowModel,
    SortingState
} from '@tanstack/angular-table';
import { ChevronDown, ChevronUp, LucideAngularModule } from 'lucide-angular';

type Item = {
    id: string;
    name: string;
    email: string;
    location: string;
    flag: string;
    status: 'Active' | 'Inactive' | 'Pending';
    balance: number;
    department: string;
    role: string;
    joinDate: string;
    lastActive: string;
    performance: 'Excellent' | 'Good' | 'Average' | 'Poor';
};

@Component({
    selector: 'demo-table-14',
    imports: [
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        LucideAngularModule,
        FlexRenderDirective,
        OriTableBody,
        OriTableCell,
        OriTable
    ],
    template: `
        <div class="relative w-full overflow-auto">
            <table [style.width.px]="table.getCenterTotalSize()" oriTable style="table-layout: fixed;">
                <thead oriTableHeader>
                    @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
                        <tr class="bg-muted/50" oriTableRow>
                            @for (header of headerGroup.headers; track header.id) {
                                <th
                                    class="relative h-10 select-none border-t last:[&>.cursor-col-resize]:opacity-0"
                                    [attr.aria-sort]="
                                        header.column.getIsSorted() === 'asc'
                                            ? 'ascending'
                                            : header.column.getIsSorted() === 'desc'
                                              ? 'descending'
                                              : 'none'
                                    "
                                    [attr.colSpan]="header.colSpan"
                                    [style.width.px]="header.getSize()"
                                    oriTableHead
                                >
                                    @if (!header.isPlaceholder) {
                                        <div
                                            [class]="
                                                cn(
                                                    header.column.getCanSort() &&
                                                        'flex h-full cursor-pointer select-none items-center justify-between gap-2'
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

                                    @if (header.column.getCanResize()) {
                                        <div
                                            class="user-select-none before:bg-border absolute -right-2 top-0 z-10 h-full w-4 cursor-col-resize touch-none justify-center before:absolute before:inset-y-0 before:w-px before:translate-x-px"
                                            (dblclick)="header.column.resetSize()"
                                            (mousedown)="header.getResizeHandler()($event)"
                                            (touchstart)="header.getResizeHandler()($event)"
                                        ></div>
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
            <p class="text-muted-foreground mt-4 text-center text-sm">
                Resizable and sortable columns made with{{ ' ' }}
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
    `
})
export default class Table14Component implements OnInit {
    readonly data = signal<Item[]>([]);

    readonly sorting = signal<SortingState>([
        {
            id: 'name',
            desc: false
        }
    ]);

    readonly columns: ColumnDef<Item>[] = [
        {
            header: 'Name',
            accessorKey: 'name',
            cell: ({ row }) => `<div class="truncate font-medium">${row.getValue('name')}</div>`,
            sortUndefined: 'last',
            sortDescFirst: false
        },
        {
            header: 'Email',
            accessorKey: 'email'
        },
        {
            header: 'Location',
            accessorKey: 'location',
            cell: ({ row }) => `
                <div class="truncate">
                    <span class="text-lg leading-none">${row.original.flag}</span> ${row.getValue('location')}
                </div>
            `
        },
        {
            header: 'Status',
            accessorKey: 'status'
        },
        {
            header: 'Balance',
            accessorKey: 'balance',
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue('balance'));

                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(amount);
            }
        },
        {
            header: 'Department',
            accessorKey: 'department'
        },
        {
            header: 'Role',
            accessorKey: 'role'
        },
        {
            header: 'Join Date',
            accessorKey: 'joinDate'
        },
        {
            header: 'Last Active',
            accessorKey: 'lastActive'
        },
        {
            header: 'Performance',
            accessorKey: 'performance'
        }
    ];

    readonly table = createAngularTable<Item>(() => ({
        data: this.data(),
        columns: this.columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: (updaterOrValue) =>
            typeof updaterOrValue === 'function'
                ? this.sorting.update(updaterOrValue)
                : this.sorting.set(updaterOrValue),
        state: {
            sorting: this.sorting()
        },
        columnResizeMode: 'onChange',
        enableSortingRemoval: false
    }));

    onHeaderKeyDown(e: any, header: any) {
        // Enhanced keyboard handling for sorting
        if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            header.column.getToggleSortingHandler()?.(e);
        }
    }

    async ngOnInit() {
        await this.fetchPosts();
    }

    private async fetchPosts() {
        const res = await fetch('https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json');
        const data = await res.json();

        this.data.set(data.slice(0, 5));
    }

    protected readonly cn = cn;
    protected readonly ChevronUp = ChevronUp;
    protected readonly ChevronDown = ChevronDown;
}
