import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip, OriTooltipContent } from '@origin-ui/components/tooltip';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';

@Component({
    selector: 'demo-tooltip-02',
    imports: [
        OriTooltipContent,
        OriButton,
        OriTooltip,
        RdxTooltipContentDirective,
        RdxTooltipTriggerDirective
    ],
    template: `
        <ng-container [delayDuration]="0" oriTooltip>
            <ori-button variant="outline" size="sm" rdxTooltipTrigger>Dark</ori-button>

            <ng-template [sideOffset]="8" rdxTooltipContent>
                <ori-tooltip-content-attributes class="dark px-2 py-1 text-xs">
                    This is a simple tooltip
                </ori-tooltip-content-attributes>
            </ng-template>
        </ng-container>
    `
})
export default class Tooltip02Component {}
