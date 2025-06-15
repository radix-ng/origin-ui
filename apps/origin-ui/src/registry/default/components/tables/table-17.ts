import { NgTemplateOutlet } from '@angular/common';
import { Component, input, OnInit, output, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '@origin-ui/components/table';
import { cn } from '@origin-ui/components/utils';
import {
    CellContext,
    ColumnDef,
    createAngularTable,
    ExpandedState,
    flexRenderComponent,
    FlexRenderDirective,
    getCoreRowModel,
    getExpandedRowModel,
    injectFlexRenderContext
} from '@tanstack/angular-table';
import { ChevronDown, ChevronUp, Info, LucideAngularModule } from 'lucide-angular';
import { OriBadgeComponent } from '~/registry/default/ui/badge';

type Item = {
    id: string;
    name: string;
    email: string;
    location: string;
    flag: string;
    status: 'Active' | 'Inactive' | 'Pending';
    balance: number;
    note?: string;
};

@Component({
    selector: 'demo-table-17',
    imports: [
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        LucideAngularModule,
        FlexRenderDirective,
        OriTableBody,
        OriTableCell,
        OriTable,
        NgTemplateOutlet
    ],
    template: `
        <div class="relative w-full overflow-auto">
            <table oriTable>
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
                                                let headerValue
                                            "
                                        >
                                            {{ headerValue }}
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
                                    <td
                                        class="whitespace-nowrap [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0"
                                        oriTableCell
                                    >
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
                            @if (row.getIsExpanded()) {
                                <tr oriTableRow>
                                    <td [attr.colSpan]="row.getVisibleCells().length" oriTableCell>
                                        <ng-container
                                            *ngTemplateOutlet="subComponentTemplate; context: { $implicit: row }"
                                        />
                                        <ng-template #subComponentTemplate let-row>
                                            <div class="text-primary/80 flex items-start py-2">
                                                <span
                                                    class="me-3 mt-0.5 flex w-7 shrink-0 justify-center"
                                                    aria-hidden="true"
                                                >
                                                    <lucide-angular class="opacity-60" [img]="Info" size="16" />
                                                </span>
                                                <p class="text-sm">
                                                    {{ row.original.note }}
                                                </p>
                                            </div>
                                        </ng-template>
                                    </td>
                                </tr>
                            }
                        }
                    } @else {
                        <tr oriTableRow>
                            <td class="h-24 text-center" oriTableCell>No results.</td>
                        </tr>
                    }
                </tbody>
            </table>
            <p class="text-muted-foreground mt-4 text-center text-sm">
                Expanding sub-row made with{{ ' ' }}
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
export default class Table17Component implements OnInit {
    readonly data = signal<Item[]>([]);

    readonly columns: ColumnDef<Item>[] = [
        {
            id: 'expander',
            header: () => null,
            cell: ({ row }) => {
                return flexRenderComponent(Expander, {
                    inputs: {
                        expanded: row.getIsExpanded()
                    },
                    outputs: {
                        click: row.getToggleExpandedHandler()
                    }
                });
            }
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
            cell: ({ row }) =>
                `<div>
                    <span class="text-lg leading-none">${row.original.flag}</span> ${row.getValue('location')}
                 </div>`
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({ row }) => {
                return flexRenderComponent(StatusRow);
            }
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
            }
        }
    ];

    readonly expanded = signal<ExpandedState>({});

    readonly table = createAngularTable<Item>(() => ({
        data: this.data(),
        columns: this.columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        onExpandedChange: (updater) =>
            typeof updater === 'function' ? this.expanded.update(updater) : this.expanded.set(updater),
        state: {
            expanded: this.expanded()
        }
    }));

    async ngOnInit() {
        await this.fetchPosts();
    }

    private async fetchPosts() {
        const res = await fetch(
            'https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/users-01_fertyx.json'
        );
        const data = await res.json();

        this.data.set(data.slice(0, 5));
    }

    protected readonly cn = cn;
    protected readonly Info = Info;
}

@Component({
    selector: 'expander-button',
    imports: [
        OriButton,
        LucideAngularModule
    ],
    template: `
        <button
            class="text-muted-foreground size-7 shadow-none"
            [attr.aria-expanded]="expanded()"
            [attr.aria-label]="
                expanded()
                    ? 'Collapse details for ' + context.row.original
                    : 'Expand details for ' + context.row.original
            "
            (click)="click.emit($event)"
            oriButton
            variant="ghost"
            size="icon"
        >
            @if (expanded()) {
                <lucide-angular class="opacity-60" [img]="ChevronUp" size="16" aria-hidden="true" />
            } @else {
                <lucide-angular class="opacity-60" [img]="ChevronDown" size="16" aria-hidden="true" />
            }
        </button>
    `
})
export class Expander<T> {
    readonly context = injectFlexRenderContext<CellContext<T, unknown>>();

    readonly expanded = input.required<boolean>();

    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly click = output<MouseEvent>();

    protected readonly ChevronUp = ChevronUp;
    protected readonly ChevronDown = ChevronDown;
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
