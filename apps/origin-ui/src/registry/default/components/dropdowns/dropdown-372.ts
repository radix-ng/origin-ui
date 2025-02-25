import { Component } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import {
    OriDropdownMenuContent,
    OriDropdownMenuRadioGroup,
    OriDropdownMenuRadioItem,
    OriDropdownMenuTrigger
} from '~/registry/default/ui/dropdown-menu';
import { DropdownAlign } from '@radix-ng/primitives/dropdown-menu';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-dropdown-372',
    imports: [
        OriButton,
        OriDropdownMenuTrigger,
        LucideAngularModule,
        OriDropdownMenuContent,
        OriDropdownMenuRadioGroup,
        OriDropdownMenuRadioItem
    ],
    template: `
        <button
            [oriDropdownMenuTrigger]="menuContent"
            [align]="DropdownAlign.Center"
            sideOffset="4"
            oriButton
            variant="outline"
            aria-hidden="true"
        >
            Radio items
            <lucide-angular
                class="-me-1 ms-2 opacity-60"
                [img]="ChevronDown"
                size="16"
                strokeWidth="2"
                aria-hidden="true"
            />
        </button>

        <ng-template #menuContent>
            <div oriDropdownMenuContent>
                <div [(value)]="framework" (valueChange)="onValueChange($event)" oriDropdownMenuRadioGroup>
                    <div oriDropdownMenuRadioItem value="nextjs">Next.js</div>
                    <div oriDropdownMenuRadioItem value="sveltekit" disabled>SvelteKit</div>
                    <div oriDropdownMenuRadioItem value="remix">Remix</div>
                    <div oriDropdownMenuRadioItem value="astro">Astro</div>
                </div>
            </div>
        </ng-template>
    `
})
export default class Dropdown372Component {
    protected readonly DropdownAlign = DropdownAlign;
    protected readonly ChevronDown = ChevronDown;

    framework = 'nextjs';

    onValueChange(value: string) {
        this.framework = value;
    }
}
