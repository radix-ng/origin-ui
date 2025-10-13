import { Component } from '@angular/core';
import { RdxTooltipTrigger } from '@radix-ng/primitives/tooltip2';
import { OriButton } from '~/registry/default/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';

@Component({
    selector: 'demo-tooltip-01',
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipTrigger,
        OriTooltip
    ],
    template: `
        <ng-container [delayDuration]="0" oriTooltip>
            <button oriButton variant="outline" size="sm" rdxTooltipTrigger>Tiny</button>

            <ori-tooltip-content contentClass="px-2 py-1 text-xs">This is a simple tooltip</ori-tooltip-content>
        </ng-container>
    `
})
export default class Tooltip01Component {}
