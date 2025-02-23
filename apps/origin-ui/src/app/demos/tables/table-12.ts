import { Component, OnInit, signal } from '@angular/core';
import { OriBadgeComponent } from '@origin-ui/components/badge';
import { OriCheckbox } from '@origin-ui/components/checkbox';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableFooter,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '@origin-ui/components/table';
import { cn } from '@origin-ui/components/utils';
import {
    CellContext,
    ColumnDef,
    createAngularTable,
    flexRenderComponent,
    FlexRenderDirective,
    getCoreRowModel,
    HeaderContext,
    injectFlexRenderContext
} from '@tanstack/angular-table';
import { LucideAngularModule } from 'lucide-angular';

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
    selector: 'demo-table-12',
    imports: [
        OriTable,
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        LucideAngularModule,
        FlexRenderDirective,
        OriTableBody,
        OriTableCell,
        OriTableFooter
    ],
    template: `
        <div>
            <ori-table>
                <thead oriTableHeader>
                    @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
                        <tr class="hover:bg-transparent" oriTableRow>
                            @for (header of headerGroup.headers; track header.id) {
                                <th oriTableHead>
                                    @if (!header.isPlaceholder) {
                                        <ng-container
                                            *flexRender="
                                                header.column.columnDef.header;
                                                props: header.getContext();
                                                let headerCell
                                            "
                                        >
                                            {{ headerCell }}
                                        </ng-container>
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
                                            *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cell"
                                        >
                                            <div [innerHTML]="cell"></div>
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
                <tfoot class="bg-transparent" oriTableFooter>
                    <tr class="hover:bg-transparent" oriTableRow>
                        <td oriTableCell colSpan="5">Total</td>
                        <td class="text-right" oriTableCell>{{ totalBalance(data()) }}</td>
                    </tr>
                </tfoot>
            </ori-table>
            <p class="text-muted-foreground mt-4 text-center text-sm">
                Basic data table made with {{ ' ' }}
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
export default class Table12Component implements OnInit {
    readonly data = signal<Item[]>([]);

    readonly columns: ColumnDef<Item>[] = [
        {
            id: 'select',
            header: () => flexRenderComponent(CheckboxHeader),
            cell: () => flexRenderComponent(CheckboxRow)
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: ({ row }) => `<div class="font-medium">${row.getValue('name')}</div>`
        },
        {
            header: 'Email',
            accessorKey: 'email'
        },
        {
            header: 'Location',
            accessorKey: 'location',
            cell: ({ row }) => `
            <div>
               <span class="text-lg leading-none">${row.original.flag}</span> ${row.getValue('location')}
            </div>`
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: () => flexRenderComponent(StatusRow)
        },
        {
            header: () => flexRenderComponent(BalanceHeader),
            accessorKey: 'balance',
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue('balance'));
                const formatted = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(amount);
                return `<div class="text-right">${formatted}</div>`;
            }
        }
    ];

    readonly table = createAngularTable<Item>(() => ({
        data: this.data(),
        columns: this.columns,
        getCoreRowModel: getCoreRowModel()
    }));

    totalBalance(data: any) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(data.reduce((total: any, item: { balance: any }) => total + item.balance, 0));
    }

    async ngOnInit() {
        await this.fetchPosts();
    }

    private async fetchPosts() {
        const res = await fetch('https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json');
        const data = await res.json();

        this.data.set(data.slice(0, 5));
    }
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
export class CheckboxHeader<T> {
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
export class CheckboxRow<T> {
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
export class StatusRow<T> {
    readonly context = injectFlexRenderContext<CellContext<T, unknown>>();
    protected readonly cn = cn;
}

@Component({
    template: `
        <div class="text-right">Balance</div>
    `
})
export class BalanceHeader {}
