import { Component, signal } from '@angular/core';
import { SwitchComponent } from '~/registry/ui/switch';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
    selector: 'demo-switch-08',
    imports: [
        SwitchComponent,
        LucideAngularModule
    ],
    template: `
        <div class="group inline-flex items-center gap-2" [attr.data-state]="checked() ? 'checked' : 'unchecked'">
            <span
                class="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
                [id]="id + '-off'"
                [attr.aria-controls]="id"
                (click)="checked.set(false)"
            >
                <lucide-angular [img]="Moon" size="16" strokeWidth="2" aria-hidden="true" />
            </span>
            <button
                [id]="id"
                [checked]="checked()"
                [attr.aria-labelledby]="id + '-off ' + id + '-on'"
                (onCheckedChange)="checked.set(!checked())"
                oriSwitch
                aria-label="Toggle between dark and light mode"
            ></button>

            <span
                class="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
                [id]="id + '-on'"
                [attr.aria-controls]="id"
                (click)="checked.set(true)"
            >
                <lucide-angular [img]="Sun" size="16" strokeWidth="2" aria-hidden="true" />
            </span>
        </div>
    `
})
export default class Switch08Component {
    readonly id = 'switch08';
    protected readonly Sun = Sun;
    protected readonly Moon = Moon;

    readonly checked = signal<boolean>(true);
}
