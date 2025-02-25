import { Component } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriLabel } from '~/registry/default/ui/label';
import { OriPopoverContent } from '~/registry/default/ui/popover';
import { RdxPositionSide } from '@radix-ng/primitives/core';
import {
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';
import { ListFilter, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-popover-01',
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
                <button oriButton variant="outline" size="icon" rdxPopoverTrigger>
                    <lucide-angular [img]="ListFilterIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </button>
                <ng-template [side]="RdxPopoverSide.Bottom" [sideOffset]="4" rdxPopoverContent>
                    <ori-popover-content class="w-36 p-3">
                        <div class="space-y-3">
                            <div class="text-muted-foreground text-xs font-medium">Filters</div>
                            <form class="space-y-3">
                                <div class="flex items-center gap-2">
                                    <ori-checkbox class="flex" id="popover-filter-01" />
                                    <label class="font-normal" oriLabel htmlFor="popover-filter-01">Real Time</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-02" />
                                    <label class="font-normal" oriLabel htmlFor="popover-filter-02">Top Channels</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-03" />
                                    <label class="font-normal" oriLabel htmlFor="popover-filter-03">Last Orders</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <ori-checkbox id="popover-filter-04" />
                                    <label class="font-normal" oriLabel htmlFor="popover-filter-04">Total Spent</label>
                                </div>
                                <div
                                    class="bg-border -mx-3 my-1 h-px"
                                    role="separator"
                                    aria-orientation="horizontal"
                                ></div>
                                <div class="flex justify-between gap-2">
                                    <button class="h-7" oriButton size="sm" variant="outline">Clear</button>
                                    <button class="h-7" oriButton size="sm">Apply</button>
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
    protected readonly RdxPopoverSide = RdxPositionSide;
    protected readonly ListFilterIcon = ListFilter;
}
