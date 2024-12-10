import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip, OriTooltipContent } from '@origin-ui/components/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-02',
    standalone: true,
    imports: [
        OriTooltipContent,
        OriButton,
        OriTooltip,
        RdxTooltipContentDirective,
        RdxTooltipTriggerDirective
    ],
    template: `
        <ori-tooltip [delayDuration]="0">
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>Dark</ori-button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content-attributes className="dark px-2 py-1 text-xs">
                    This is a simple tooltip
                </ori-tooltip-content-attributes>
            </ng-template>
        </ori-tooltip>
    `
})
export default class Tooltip02Component {}
