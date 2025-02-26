import { Component, signal } from '@angular/core';
import { OriLabel } from '~/registry/default/ui/label';
import { SwitchComponent } from '~/registry/default/ui/switch';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
    selector: 'demo-switch-09',
    imports: [
        SwitchComponent,
        LucideAngularModule,
        OriLabel
    ],
    template: `
        <div>
            <div class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
                <button
                    class="data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 peer absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
                    [id]="id"
                    [checked]="checked()"
                    (onCheckedChange)="checked.set($event)"
                    oriSwitch
                ></button>
                <span
                    class="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center"
                >
                    <lucide-angular [img]="Moon" size="16" strokeWidth="2" aria-hidden="true" />
                </span>
                <span
                    class="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center"
                >
                    <lucide-angular [img]="Sun" size="16" strokeWidth="2" aria-hidden="true" />
                </span>
            </div>
            <label class="sr-only" [htmlFor]="id" oriLabel>Labeled switch</label>
        </div>
    `
})
export default class Switch09Component {
    readonly id = 'switch09';
    protected readonly Sun = Sun;
    protected readonly Moon = Moon;

    readonly checked = signal<boolean>(true);
}
