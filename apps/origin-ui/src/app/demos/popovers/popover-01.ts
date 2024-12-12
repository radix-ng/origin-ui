import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriCheckbox } from '@origin-ui/components/checkbox';
import { OriLabel } from '@origin-ui/components/label';
import { OriPopoverContent } from '@origin-ui/components/popover';
import {
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverSide,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';
import { ListFilter, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-popover-01',
    standalone: true,
    imports: [
        OriButton,
        OriPopoverContent,
        RdxPopoverRootDirective,
        RdxPopoverTriggerDirective,
        RdxPopoverContentDirective,
        LucideAngularModule,
        OriLabel,
        OriCheckbox
    ],
    template: `
        <div class="flex flex-col gap-4">
            <ng-container rdxPopoverRoot>
                <ori-button variant="outline" size="icon" rdxPopoverTrigger>
                    <lucide-angular [img]="ListFilterIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </ori-button>
                <ng-template [side]="RdxPopoverSide.Bottom" [sideOffset]="4" rdxPopoverContent>
                    <ori-popover-content class="w-36 p-3">
                        <div class="space-y-3">
                            <div class="text-muted-foreground text-xs font-medium">Filters</div>
                            <form class="space-y-3">
                                <div class="flex items-center gap-2">
                                    <ori-checkbox class="flex" id="popover-filter-01" />
                                    <ori-label className="font-normal" htmlFor="popover-filter-01">Real Time</ori-label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-02" />
                                    <ori-label htmlFor="popover-filter-02" className="font-normal">
                                        Top Channels
                                    </ori-label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-03" />
                                    <ori-label htmlFor="popover-filter-03" className="font-normal">
                                        Last Orders
                                    </ori-label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-04" />
                                    <ori-label htmlFor="popover-filter-04" className="font-normal">
                                        Total Spent
                                    </ori-label>
                                </div>
                                <div
                                    class="bg-border -mx-3 my-1 h-px"
                                    role="separator"
                                    aria-orientation="horizontal"
                                ></div>
                                <div class="flex justify-between gap-2">
                                    <ori-button class="h-7" size="sm" variant="outline">Clear</ori-button>
                                    <ori-button class="h-7" size="sm">Apply</ori-button>
                                </div>
                            </form>
                        </div>
                    </ori-popover-content>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Popover01Component {
    protected readonly RdxPopoverSide = RdxPopoverSide;
    protected readonly ListFilterIcon = ListFilter;
}
