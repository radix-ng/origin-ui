import { Component, signal } from '@angular/core';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/default/ui/radio-group';

@Component({
    selector: 'demo-radio-16',
    imports: [
        OriRadioGroup,
        OriRadioGroupItem
    ],
    template: `
        <fieldset class="space-y-4">
            <legend class="text-foreground text-sm leading-none font-medium">Rate your experience</legend>
            <ori-radio-group class="inline-flex gap-0">
                @for (item of items; track $index) {
                    <label
                        class="group focus-within:border-ring focus-within:ring-ring/50 relative cursor-pointer rounded p-0.5 outline-none focus-within:ring-[3px]"
                        (mouseenter)="hoverRating.set(item)"
                        (mouseleave)="hoverRating.set(null)"
                        (click)="currentRating.set(item)"
                    >
                        <ori-radio-group-item class="sr-only" [value]="item" />
                        <svg
                            class="remixicon text-input text-amber-500 transition-all group-hover:scale-110"
                            [class.text-amber-500]="(hoverRating() ?? currentRating()) >= item"
                            [class.text-input]="(hoverRating() ?? currentRating()) < item"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                        >
                            <path
                                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                            ></path>
                        </svg>

                        <span class="sr-only">
                            {{ item }} star
                            @if (item === '1') {
                                ""
                            } @else {
                                "s"
                            }
                        </span>
                    </label>
                }
            </ori-radio-group>
        </fieldset>
    `
})
export default class Radio16 {
    readonly items = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ];

    readonly hoverRating = signal<string | null>('');
    readonly currentRating = signal<string>('');
}
