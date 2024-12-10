import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip, OriTooltipContent } from '@origin-ui/components/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-01',
    standalone: true,
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipContentDirective,
        RdxTooltipTriggerDirective,
        OriTooltip
    ],
    template: `
        <ori-tooltip [delayDuration]="0">
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>Tiny</ori-button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content-attributes className="px-2 py-1 text-xs">
                    This is a simple tooltip
                </ori-tooltip-content-attributes>
            </ng-template>
        </ori-tooltip>
    `
})
export default class Tooltip01Component {}
