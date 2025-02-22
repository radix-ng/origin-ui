import { Component } from '@angular/core';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableFooter,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '@origin-ui/components/table';

@Component({
    selector: 'demo-table-03',
    imports: [
        OriTable,
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        OriTableBody,
        OriTableCell,
        OriTableFooter
    ],
    template: `
        <div>
            <ori-table>
                <thead class="bg-transparent" oriTableHeader>
                    <tr class="hover:bg-transparent" oriTableRow>
                        <th oriTableHead>Name</th>
                        <th oriTableHead>Email</th>
                        <th oriTableHead>Location</th>
                        <th oriTableHead>Status</th>
                        <th class="text-right" oriTableHead>Balance</th>
                    </tr>
                </thead>
                <tbody class="table-row h-2" aria-hidden="true"></tbody>
                <tbody class="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg" oriTableBody>
                    @for (item of items; track item) {
                        <tr class="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent" oriTableRow>
                            <td class="py-2.5 font-medium" oriTableCell>{{ item.name }}</td>
                            <td class="py-2.5" oriTableCell>{{ item.email }}</td>
                            <td class="py-2.5" oriTableCell>{{ item.location }}</td>
                            <td class="py-2.5" oriTableCell>{{ item.status }}</td>
                            <td class="py-2.5 text-right" oriTableCell>{{ item.balance }}</td>
                        </tr>
                    }
                </tbody>
                <tbody class="table-row h-2" aria-hidden="true"></tbody>
                <tfoot class="bg-transparent" oriTableFooter>
                    <tr class="hover:bg-transparent" oriTableRow>
                        <td [colSpan]="4" oriTableCell>Total</td>
                        <td class="text-right" oriTableCell>$2,500.00</td>
                    </tr>
                </tfoot>
            </ori-table>
            <p class="text-muted-foreground mt-4 text-center text-sm">Striped table</p>
        </div>
    `
})
export default class Table03Component {
    readonly items = [
        {
            id: '1',
            name: 'Alex Thompson',
            email: 'alex.t@company.com',
            location: 'San Francisco, US',
            status: 'Active',
            balance: '$1,250.00'
        },
        {
            id: '2',
            name: 'Sarah Chen',
            email: 'sarah.c@company.com',
            location: 'Singapore',
            status: 'Active',
            balance: '$600.00'
        },
        {
            id: '3',
            name: 'James Wilson',
            email: 'j.wilson@company.com',
            location: 'London, UK',
            status: 'Inactive',
            balance: '$650.00'
        },
        {
            id: '4',
            name: 'Maria Garcia',
            email: 'm.garcia@company.com',
            location: 'Madrid, Spain',
            status: 'Active',
            balance: '$0.00'
        },
        {
            id: '5',
            name: 'David Kim',
            email: 'd.kim@company.com',
            location: 'Seoul, KR',
            status: 'Active',
            balance: '-$1,000.00'
        }
    ];
}
