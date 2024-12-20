import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip, OriTooltipContent, OriTooltipContentDirective } from '@origin-ui/components/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-03',
    standalone: true,
    imports: [
        OriTooltipContent,
        OriButton,
        OriTooltipContentDirective,
        RdxTooltipTriggerDirective,
        OriTooltip,
        RdxTooltipContentDirective
    ],
    template: `
        <ori-tooltip [delayDuration]="0">
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>W/ arrow</ori-button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content-attributes [showArrow]="true" className="dark px-2 py-1 text-xs">
                    This tooltip has an arrow
                </ori-tooltip-content-attributes>
            </ng-template>
        </ori-tooltip>
    `
})
export default class Tooltip03Component {}
