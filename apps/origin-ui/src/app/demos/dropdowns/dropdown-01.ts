import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriDropdownMenuContent,
    OriDropdownMenuItem,
    OriDropdownMenuTrigger
} from '@origin-ui/components/dropdown-menu';
import { DropdownAlign } from '@radix-ng/primitives/dropdown-menu';
import { Ellipsis, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-dropdown-01',
    imports: [
        OriButton,
        OriDropdownMenuTrigger,
        LucideAngularModule,
        OriDropdownMenuContent,
        OriDropdownMenuItem
    ],
    template: `
        <button
            class="rounded-full shadow-none"
            [oriDropdownMenuTrigger]="menuContent"
            [align]="DropdownAlign.Center"
            sideOffset="4"
            oriButton
            variant="ghost"
            size="icon"
            aria-label="Open edit menu"
        >
            <lucide-angular [img]="Ellipsis" size="16" strokeWidth="2" aria-hidden="true" />
        </button>

        <ng-template #menuContent>
            <div oriDropdownMenuContent>
                <div oriDropdownMenuItem>Option 1</div>
                <div oriDropdownMenuItem>Option 2</div>
                <div oriDropdownMenuItem>Option 3</div>
                <div oriDropdownMenuItem>Option 4</div>
            </div>
        </ng-template>
    `
})
export default class Dropdown01Component {
    protected readonly Ellipsis = Ellipsis;
    protected readonly DropdownAlign = DropdownAlign;
}
