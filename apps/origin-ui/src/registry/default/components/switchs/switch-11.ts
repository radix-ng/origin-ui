import { Component, signal } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { SwitchComponent } from '~/registry/default/ui/switch';

@Component({
    selector: 'demo-switch-11',
    imports: [
        SwitchComponent,
        OriLabel
    ],
    template: `
        <div>
            <div class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
                <button
                    class="data-[state=unchecked]:bg-input/50 peer absolute inset-0 h-[inherit] w-auto rounded-lg [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-md [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
                    [id]="id"
                    [checked]="checked()"
                    (onCheckedChange)="checked.set($event!)"
                    oriSwitch
                ></button>
                <span
                    class="min-w-78flex pointer-events-none relative ms-0.5 items-center justify-center px-2 text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full"
                >
                    <span class="text-[10px] font-medium uppercase">Off</span>
                </span>
                <span
                    class="min-w-78flex peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 items-center justify-center px-2 text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible rtl:peer-data-[state=checked]:translate-x-full"
                >
                    <span class="text-[10px] font-medium uppercase">On</span>
                </span>
            </div>
            <label class="sr-only" [htmlFor]="id" oriLabel>Labeled switch</label>
        </div>
    `
})
export default class Switch11Component {
    readonly id = 'switch11';

    readonly checked = signal<boolean>(true);
}
