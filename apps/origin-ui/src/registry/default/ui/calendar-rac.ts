import { Component, computed, inject, input } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import { cn } from '~/registry/default/lib/utils';
import {
    RdxCalendarCellDirective,
    RdxCalendarCellTriggerDirective,
    RdxCalendarGridBodyDirective,
    RdxCalendarGridDirective,
    RdxCalendarGridHeadDirective,
    RdxCalendarGridRowDirective,
    RdxCalendarHeadCellDirective,
    RdxCalendarHeadingDirective,
    RdxCalendarNextDirective,
    RdxCalendarPrevDirective,
    RdxCalendarRootDirective
} from '@radix-ng/primitives/calendar';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'ori-calendar-header',
    imports: [
        LucideAngularModule,
        RdxCalendarPrevDirective,
        RdxCalendarNextDirective,
        RdxCalendarHeadingDirective
    ],
    template: `
        <header class="flex w-full items-center gap-1 pb-1">
            <button
                class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                type="button"
                rdxCalendarPrev
            >
                <lucide-angular [img]="ChevronLeft" size="16" />
            </button>
            <div class="grow text-center text-sm font-medium" #head="rdxCalendarHeading" rdxCalendarHeading>
                {{ head.headingValue() }}
            </div>
            <button
                class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                type="button"
                rdxCalendarNext
            >
                <lucide-angular [img]="ChevronRight" size="16" />
            </button>
        </header>
    `
})
export class OriCalendarHeader {
    protected readonly ChevronLeft = ChevronLeft;
    protected readonly ChevronRight = ChevronRight;
}

@Component({
    selector: 'ori-calendar-grid-component',
    imports: [
        RdxCalendarGridDirective,
        RdxCalendarGridHeadDirective,
        RdxCalendarGridBodyDirective,
        RdxCalendarGridRowDirective,
        RdxCalendarHeadCellDirective,
        RdxCalendarCellDirective,
        RdxCalendarCellTriggerDirective
    ],
    template: `
        <table rdxCalendarGrid>
            @for (month of rootContext()?.months(); track $index) {
                <thead rdxCalendarGridHead>
                    <tr rdxCalendarGridRow>
                        @for (day of rootContext()?.weekDays(); track $index) {
                            <th
                                class="text-muted-foreground/80 size-9 rounded-md p-0 text-xs font-medium"
                                rdxCalendarHeadCell
                            >
                                {{ day }}
                            </th>
                        }
                    </tr>
                </thead>
                <tbody class="[&_td]:px-0 [&_td]:py-px" rdxCalendarGridBody>
                    @for (weekDates of month.weeks; track $index) {
                        <tr>
                            @for (weekDate of weekDates; track $index) {
                                <td [date]="weekDate" rdxCalendarCell>
                                    <div
                                        #cell="rdxCalendarCellTrigger"
                                        [day]="weekDate"
                                        [month]="month.value"
                                        [class]="
                                            cn(
                                                'text-foreground data-hovered:bg-accent data-selected:bg-primary data-hovered:text-foreground data-selected:text-primary-foreground focus:ring-ring/50 relative flex size-9 items-center justify-center rounded-md p-0 text-sm font-normal whitespace-nowrap [transition-property:color,background-color,border-radius,box-shadow] duration-150 outline-none focus:ring-[3px] data-disabled:pointer-events-none data-focus-visible:z-10 data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-30 data-[outside-view]:opacity-30',
                                                isToday(weekDate)
                                            )
                                        "
                                        rdxCalendarCellTrigger
                                    >
                                        {{ cell.dayValue() }}
                                    </div>
                                </td>
                            }
                        </tr>
                    }
                </tbody>
            }
        </table>
    `
})
export class OriCalendarGridComponent {
    readonly rootContext = input<RdxCalendarRootDirective>();

    protected readonly cn = cn;

    now = today(getLocalTimeZone());

    isRange = false;

    isToday(date: any) {
        if (date.compare(this.now) === 0) {
            return cn(
                'after:bg-primary after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full',
                this.isRange
                    ? 'data-selection-end:after:bg-background data-selection-start:after:bg-background'
                    : 'data-selected:after:bg-background'
            );
        }
        return '';
    }
}

@Component({
    selector: 'ori-calendar',
    imports: [
        OriCalendarHeader,
        OriCalendarGridComponent
    ],
    hostDirectives: [{ directive: RdxCalendarRootDirective, inputs: ['fixedWeeks', 'value'] }],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ori-calendar-header />
        <ori-calendar-grid-component [rootContext]="rootContext" />
    `
})
export class OriCalendar {
    protected readonly rootContext = inject(RdxCalendarRootDirective, { host: true });

    readonly class = input<string>();

    protected hostClasses = computed(() => cn('w-fit block', this.class()));
}
