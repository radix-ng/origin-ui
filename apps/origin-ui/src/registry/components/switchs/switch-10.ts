import { Component, signal } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { SwitchComponent } from '~/registry/ui/switch';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
    selector: 'demo-switch-10',
    imports: [
        SwitchComponent,
        LucideAngularModule,
        OriLabel
    ],
    template: `
        <div>
            <div class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
                <button
                    class="data-[state=unchecked]:bg-input/50 peer absolute inset-0 h-[inherit] w-auto [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
                    [id]="id"
                    [checked]="checked()"
                    (onCheckedChange)="checked.set($event)"
                    oriSwitch
                ></button>
                <span
                    class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full"
                >
                    <lucide-angular [img]="Moon" size="16" strokeWidth="2" aria-hidden="true" />
                </span>
                <span
                    class="peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:-translate-x-full rtl:peer-data-[state=checked]:translate-x-full"
                >
                    <lucide-angular [img]="Sun" size="16" strokeWidth="2" aria-hidden="true" />
                </span>
            </div>
            <label class="sr-only" [htmlFor]="id" oriLabel>Labeled switch</label>
        </div>
    `
})
export default class Switch10Component {
    readonly id = 'switch10';
    protected readonly Sun = Sun;
    protected readonly Moon = Moon;

    readonly checked = signal<boolean>(true);
}
