import { Component } from '@angular/core';
import { RdxTooltipTrigger } from '@radix-ng/primitives/tooltip2';
import { OriButton } from '~/registry/default/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';

@Component({
    selector: 'demo-tooltip-03',
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipTrigger,
        OriTooltip
    ],
    template: `
        <ng-container [delayDuration]="0" oriTooltip>
            <button oriButton variant="outline" size="sm" rdxTooltipTrigger>W/ arrow</button>

            <ori-tooltip-content contentClass="dark px-2 py-1 text-xs" showArrow>
                This tooltip has an arrow
            </ori-tooltip-content>
        </ng-container>
    `
})
export default class Tooltip03Component {}
