import { Component } from '@angular/core';
import { Check, LucideAngularModule } from 'lucide-angular';
import { OriBadgeComponent } from '~/registry/default/ui/badge';
import { OriCheckbox } from '~/registry/default/ui/checkbox';

@Component({
    selector: 'demo-badge-11',
    imports: [LucideAngularModule, OriCheckbox, OriBadgeComponent],
    template: `
        <ori-badge
            class="has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex outline-none has-focus-visible:ring-[3px]"
        >
            <ori-checkbox class="peer sr-only after:absolute after:inset-0" id="badge-selectable" defaultChecked />
            <lucide-angular
                class="[&_svg]:hidden peer-data-[state=checked]:[&_svg]:block"
                [img]="CheckIcon"
                size="12"
                aria-hidden="true"
            />
            <label class="cursor-pointer select-none after:absolute after:inset-0" for="badge-selectable">
                Selectable
            </label>
        </ori-badge>
    `
})
export default class Badge11 {
    protected readonly CheckIcon = Check;
}
