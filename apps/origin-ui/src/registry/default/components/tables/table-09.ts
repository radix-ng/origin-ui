import { Component } from '@angular/core';
import { OriTable, OriTableCell, OriTableRow } from '~/registry/default/ui/table';

@Component({
    selector: 'demo-table-09',
    imports: [
        OriTable,
        OriTableRow,
        OriTableCell
    ],
    template: `
        <div class="mx-auto max-w-lg">
            <div class="bg-background overflow-hidden rounded-md border">
                <table oriTable>
                    <tbody>
                        <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                            <td class="bg-muted/50 py-2 font-medium" oriTableCell>Name</td>
                            <td class="py-2" oriTableCell>David Kim</td>
                        </tr>
                        <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                            <td class="bg-muted/50 py-2 font-medium" oriTableCell>Email</td>
                            <td class="py-2" oriTableCell>d.kim&#64;company.com</td>
                        </tr>
                        <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                            <td class="bg-muted/50 py-2 font-medium" oriTableCell>Location</td>
                            <td class="py-2" oriTableCell>Seoul, KR</td>
                        </tr>
                        <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                            <td class="bg-muted/50 py-2 font-medium" oriTableCell>Status</td>
                            <td class="py-2" oriTableCell>Active</td>
                        </tr>
                        <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                            <td class="bg-muted/50 py-2 font-medium" oriTableCell>Balance</td>
                            <td class="py-2" oriTableCell>$1,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-muted-foreground mt-4 text-center text-sm">Vertical table</p>
        </div>
    `
})
export default class Table09Component {}
