import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip } from '@origin-ui/components/tooltip';
import {
    RdxTooltipContentDirective,
    RdxTooltipRootDirective,
    RdxTooltipTriggerDirective
} from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-03',
    standalone: true,
    imports: [OriTooltip, OriButton, RdxTooltipRootDirective, RdxTooltipContentDirective, RdxTooltipTriggerDirective],
    template: `
        <ng-container [delayDuration]="0" rdxTooltipRoot>
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>W/ arrow</ori-button>

            <ng-template [sideOffset]="10" rdxTooltipContent>
                <ori-tooltip-content [showArrow]="true" className="dark px-2 py-1 text-xs">
                    This tooltip has an arrow
                </ori-tooltip-content>
            </ng-template>
        </ng-container>
    `
})
export default class Tooltip03Component {}
