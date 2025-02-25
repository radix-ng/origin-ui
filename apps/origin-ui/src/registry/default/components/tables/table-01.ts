import { Component } from '@angular/core';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableFooter,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '~/registry/default/ui/table';

@Component({
    selector: 'demo-table-01',
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
        <div class="relative w-full overflow-auto">
            <table oriTable>
                <thead oriTableHeader>
                    <tr class="hover:bg-transparent" oriTableRow>
                        <th oriTableHead>Name</th>
                        <th oriTableHead>Email</th>
                        <th oriTableHead>Location</th>
                        <th oriTableHead>Status</th>
                        <th class="text-right" oriTableHead>Balance</th>
                    </tr>
                </thead>
                <tbody oriTableBody>
                    @for (item of items; track item) {
                        <tr oriTableRow>
                            <td class="font-medium" oriTableCell>{{ item.name }}</td>
                            <td oriTableCell>{{ item.email }}</td>
                            <td oriTableCell>{{ item.location }}</td>
                            <td oriTableCell>{{ item.status }}</td>
                            <td class="text-right" oriTableCell>{{ item.balance }}</td>
                        </tr>
                    }
                </tbody>
                <tfoot class="bg-transparent" oriTableFooter>
                    <tr class="hover:bg-transparent" oriTableRow>
                        <td [colSpan]="4" oriTableCell>Total</td>
                        <td class="text-right" oriTableCell>$2,500.00</td>
                    </tr>
                </tfoot>
            </table>
            <p class="text-muted-foreground mt-4 text-center text-sm">Basic table</p>
        </div>
    `
})
export default class Table01Component {
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
