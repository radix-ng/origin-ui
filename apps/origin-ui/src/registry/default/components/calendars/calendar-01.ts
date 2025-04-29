import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import { OriCalendar } from '~/registry/default/ui/calendar-rac';

@Component({
    selector: 'demo-calendar-01',
    imports: [
        OriCalendar
    ],
    template: `
        <div>
            <ori-calendar class="rounded-md border p-2" [value]="date" />
        </div>
    `
})
export default class Calendar01Component {
    date = today(getLocalTimeZone());
}
