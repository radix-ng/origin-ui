import { Component, signal } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { OriLabel } from '~/registry/default/ui/label';
import { SwitchComponent } from '~/registry/default/ui/switch';

@Component({
    selector: 'demo-switch-07',
    imports: [
        OriLabel,
        SwitchComponent,
        LucideAngularModule
    ],
    template: `
        <div class="inline-flex items-center gap-2">
            <button
                [id]="id"
                [checked]="checked()"
                (onCheckedChange)="checked.set($event!)"
                oriSwitch
                aria-label="Toggle switch"
            ></button>
            <label [htmlFor]="id" oriLabel>
                <span class="sr-only">Toggle switch</span>
                @if (checked()) {
                    <lucide-angular [img]="Sun" size="16" strokeWidth="2" aria-hidden="true" />
                } @else {
                    <lucide-angular [img]="Moon" size="16" strokeWidth="2" aria-hidden="true" />
                }
            </label>
        </div>
    `
})
export default class Switch07Component {
    readonly id = 'switch07';
    protected readonly Sun = Sun;
    protected readonly Moon = Moon;

    readonly checked = signal<boolean>(true);
}
