import { Component } from '@angular/core';
import { OriButton } from '~/registry/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/ui/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-03',
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipTriggerDirective,
        OriTooltip,
        RdxTooltipContentDirective
    ],
    template: `
        <ng-container [openDelay]="0" oriTooltip>
            <button oriButton variant="outline" size="sm" rdxTooltipTrigger>W/ arrow</button>

            <ng-template [sideOffset]="12" rdxTooltipContent>
                <ori-tooltip-content class="dark px-2 py-1 text-xs" showArrow>
                    This tooltip has an arrow
                </ori-tooltip-content>
            </ng-template>
        </ng-container>
    `
})
export default class Tooltip03Component {}
