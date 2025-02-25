import { Component } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-01',
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipContentDirective,
        RdxTooltipTriggerDirective,
        OriTooltip
    ],
    template: `
        <ng-container [openDelay]="0" oriTooltip>
            <button oriButton variant="outline" size="sm" rdxTooltipTrigger>Tiny</button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content class="px-2 py-1 text-xs">This is a simple tooltip</ori-tooltip-content>
            </ng-template>
        </ng-container>
    `
})
export default class Tooltip01Component {}
