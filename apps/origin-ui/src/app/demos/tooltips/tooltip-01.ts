import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip } from '@origin-ui/components/tooltip';
import {
    RdxTooltipContentDirective,
    RdxTooltipRootDirective,
    RdxTooltipTriggerDirective
} from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-01',
    standalone: true,
    imports: [OriTooltip, OriButton, RdxTooltipRootDirective, RdxTooltipContentDirective, RdxTooltipTriggerDirective],
    template: `
        <ng-container [delayDuration]="0" rdxTooltipRoot>
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>Tiny</ori-button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content className="px-2 py-1 text-xs">This is a simple tooltip</ori-tooltip-content>
            </ng-template>
        </ng-container>
    `
})
export default class Tooltip01Component {}
