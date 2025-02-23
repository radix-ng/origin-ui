import { Component } from '@angular/core';
import {
    OriTable,
    OriTableBody,
    OriTableCell,
    OriTableHead,
    OriTableHeader,
    OriTableRow
} from '@origin-ui/components/table';
import { Check, LucideAngularModule, Monitor, Smartphone, X } from 'lucide-angular';

@Component({
    selector: 'demo-table-11',
    imports: [
        OriTable,
        OriTableHeader,
        OriTableRow,
        OriTableHead,
        OriTableBody,
        OriTableCell,
        LucideAngularModule
    ],
    template: `
        <ori-table>
            <thead oriTableHeader>
                <tr class="*:border-border border-y-0 hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                    <td oriTableCell></td>
                    <th class="border-b text-center" [colSpan]="5" oriTableHead>
                        <lucide-angular class="inline-flex" [img]="Monitor" size="16" aria-hidden="true" />
                        <span class="sr-only">Desktop browsers</span>
                    </th>
                    <th class="border-b text-center" [colSpan]="5" oriTableHead>
                        <lucide-angular class="inline-flex" [img]="Smartphone" size="16" aria-hidden="true" />
                        <span class="sr-only">Mobile browsers</span>
                    </th>
                </tr>
            </thead>
            <thead oriTableHeader>
                <tr class="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r" oriTableRow>
                    <td oriTableCell></td>
                    @for (browser of items[0].desktop; track $index) {
                        <th class="text-foreground h-auto py-3 align-bottom" oriTableHead>
                            <span
                                class="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]"
                            >
                                {{ browser.name }}
                            </span>
                        </th>
                    }

                    @for (browser of items[0].mobile; track $index) {
                        <th class="text-foreground h-auto py-3 align-bottom" oriTableHead>
                            <span
                                class="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]"
                            >
                                {{ browser.name }}
                            </span>
                        </th>
                    }
                </tr>
            </thead>
            <tbody oriTableBody>
                @for (item of items; track item) {
                    <tr class="*:border-border [&>:not(:last-child)]:border-r" oriTableRow>
                        <th class="text-foreground font-medium" oriTableHead>{{ item.feature }}</th>
                        @for (browser of getCombinedItems(item); track $index) {
                            <td class="space-y-1 text-center" oriTableCell>
                                @if (browser.supported) {
                                    <lucide-angular
                                        class="inline-flex stroke-emerald-600"
                                        [img]="Check"
                                        size="16"
                                        aria-hidden="true"
                                    />
                                } @else {
                                    <lucide-angular
                                        class="inline-flex stroke-red-600"
                                        [img]="X"
                                        size="16"
                                        aria-hidden="true"
                                    />
                                }
                                <span class="sr-only">{{ browser.supported ? 'Supported' : 'Not supported' }}</span>
                                <div class="text-muted-foreground text-xs font-medium">{{ browser.version }}</div>
                            </td>
                        }
                    </tr>
                }
            </tbody>
        </ori-table>
    `
})
export default class Table11Component {
    readonly items = [
        {
            feature: 'scroll-timeline',
            desktop: [
                { name: 'Chrome', supported: true, version: '115' },
                { name: 'Edge', supported: true, version: '115' },
                { name: 'Firefox', supported: false, version: '111' },
                { name: 'Opera', supported: true, version: '101' },
                { name: 'Safari', supported: false, version: 'No' }
            ],
            mobile: [
                { name: 'Chrome Android', supported: true, version: '115' },
                { name: 'Firefox Android', supported: false, version: 'No' },
                { name: 'Opera Android', supported: true, version: '77' },
                { name: 'Safari iOS', supported: false, version: 'No' },
                { name: 'Samsung Internet', supported: true, version: '23' }
            ]
        },
        {
            feature: 'view-timeline',
            desktop: [
                { name: 'Chrome', supported: true, version: '115' },
                { name: 'Edge', supported: true, version: '115' },
                { name: 'Firefox', supported: false, version: '114' },
                { name: 'Opera', supported: true, version: '101' },
                { name: 'Safari', supported: false, version: 'No' }
            ],
            mobile: [
                { name: 'Chrome Android', supported: true, version: '115' },
                { name: 'Firefox Android', supported: false, version: 'No' },
                { name: 'Opera Android', supported: true, version: '77' },
                { name: 'Safari iOS', supported: false, version: 'No' },
                { name: 'Samsung Internet', supported: true, version: '23' }
            ]
        },
        {
            feature: 'font-size-adjust',
            desktop: [
                { name: 'Chrome', supported: true, version: '127' },
                { name: 'Edge', supported: true, version: '127' },
                { name: 'Firefox', supported: false, version: '3' },
                { name: 'Opera', supported: true, version: '113' },
                { name: 'Safari', supported: true, version: '16.4' }
            ],
            mobile: [
                { name: 'Chrome Android', supported: true, version: '127' },
                { name: 'Firefox Android', supported: true, version: '4' },
                { name: 'Opera Android', supported: true, version: '84' },
                { name: 'Safari iOS', supported: true, version: '16.4' },
                { name: 'Samsung Internet', supported: false, version: 'No' }
            ]
        }
    ];

    getCombinedItems(item: any) {
        return [...item.desktop, ...item.mobile];
    }

    protected readonly Monitor = Monitor;
    protected readonly Smartphone = Smartphone;
    protected readonly Check = Check;
    protected readonly X = X;
}
