import { Component } from '@angular/core';
import { RdxTooltipTrigger } from '@radix-ng/primitives/tooltip2';
import { OriButton } from '~/registry/default/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';

@Component({
    selector: 'demo-tooltip-02',
    imports: [
        OriTooltipContent,
        OriButton,
        OriTooltip,
        RdxTooltipTrigger
    ],
    template: `
        <ng-container [delayDuration]="0" oriTooltip>
            <button oriButton variant="outline" size="sm" rdxTooltipTrigger>Dark</button>

            <ori-tooltip-content contentClass="dark px-2 py-1 text-xs">This is a simple tooltip</ori-tooltip-content>
        </ng-container>
    `
})
export default class Tooltip02Component {}
