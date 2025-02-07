import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { SwitchComponent } from '@origin-ui/components/switch';

@Component({
    selector: 'demo-switch-14',
    imports: [
        SwitchComponent,
        OriLabel
    ],
    template: `
        <div
            class="border-input has-[[data-state=checked]]:border-ring relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-sm shadow-black/5"
        >
            <button
                class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
                [id]="id"
                [attr.aria-describedby]="id + '-description'"
                oriSwitch
            ></button>
            <div class="flex grow items-center gap-3">
                <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-hidden="true">
                    <circle cx="16" cy="16" r="16" fill="#121212" />
                    <g clipPath="url(#sb-a)">
                        <path
                            fill="url(#sb-b)"
                            d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
                        />
                        <path
                            fill="url(#sb-c)"
                            fillOpacity=".2"
                            d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
                        />
                        <path
                            fill="#3ECF8E"
                            d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="sb-b"
                            x1="15.907"
                            x2="23.02"
                            y1="15.73"
                            y2="18.713"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#249361" />
                            <stop offset="1" stopColor="#3ECF8E" />
                        </linearGradient>
                        <linearGradient
                            id="sb-c"
                            x1="12.753"
                            x2="15.997"
                            y1="11.412"
                            y2="17.519"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop />
                            <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="sb-a">
                            <path fill="#fff" d="M6.354 6h19.292v20H6.354z" />
                        </clipPath>
                    </defs>
                </svg>
                <div class="grid grow gap-2">
                    <label [htmlFor]="id" oriLabel>
                        Label{{ ' ' }}
                        <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                    </label>
                    <p class="text-muted-foreground text-xs" [id]="id + '-description'">
                        A short description goes here.
                    </p>
                </div>
            </div>
        </div>
    `
})
export default class Switch14Component {
    readonly id = 'switch14';
}
