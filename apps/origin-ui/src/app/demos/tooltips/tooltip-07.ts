import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriTooltip, OriTooltipContent } from '@origin-ui/components/tooltip';
import { RdxPositionSide } from '@radix-ng/primitives/core';
import { RdxTooltipContentDirective, RdxTooltipTriggerDirective } from '@radix-ng/primitives/tooltip';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-tooltip-07',
    imports: [
        OriTooltipContent,
        OriButton,
        RdxTooltipTriggerDirective,
        OriTooltip,
        RdxTooltipContentDirective,
        LucideAngularModule
    ],
    template: `
        <div class="inline-grid w-fit grid-cols-3 gap-1">
            <ng-container [delayDuration]="0" oriTooltip>
                <ori-button
                    class="col-start-2 flex"
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera up"
                >
                    <lucide-angular [img]="ChevronUpIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </ori-button>

                <ng-template [sideOffset]="4" [side]="RdxPositionSide.Top" rdxTooltipContent>
                    <ori-tooltip-content-attributes class="px-2 py-1 text-xs">
                        Pan top
                        <kbd
                            class="border-border bg-background text-muted-foreground/70 -me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                        >
                            ⌘T
                        </kbd>
                    </ori-tooltip-content-attributes>
                </ng-template>
            </ng-container>

            <ng-container [delayDuration]="0" oriTooltip>
                <ori-button
                    class="col-start-1 flex"
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera left"
                >
                    <lucide-angular [img]="ChevronLeftIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </ori-button>

                <ng-template [sideOffset]="4" [side]="RdxPositionSide.Left" rdxTooltipContent>
                    <ori-tooltip-content-attributes class="px-2 py-1 text-xs">
                        Pan left
                        <kbd
                            class="border-border bg-background text-muted-foreground/70 -me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                        >
                            ⌘L
                        </kbd>
                    </ori-tooltip-content-attributes>
                </ng-template>
            </ng-container>
            <div class="flex items-center justify-center" aria-hidden="true">
                <lucide-angular class="opacity-60" [img]="CircleIcon" size="16" strokeWidth="2" />
            </div>

            <ng-container [delayDuration]="0" oriTooltip>
                <ori-button class="flex" variant="outline" size="icon" rdxTooltipTrigger aria-label="Pan camera right">
                    <lucide-angular [img]="ChevronRight" size="16" strokeWidth="2" aria-hidden="true" />
                </ori-button>

                <ng-template [sideOffset]="4" [side]="RdxPositionSide.Right" rdxTooltipContent>
                    <ori-tooltip-content-attributes class="px-2 py-1 text-xs">
                        Pan right
                        <kbd
                            class="border-border bg-background text-muted-foreground/70 -me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                        >
                            ⌘R
                        </kbd>
                    </ori-tooltip-content-attributes>
                </ng-template>
            </ng-container>

            <ng-container [delayDuration]="0" oriTooltip>
                <ori-button
                    class="col-start-2 flex"
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera down"
                >
                    <lucide-angular [img]="ChevronDown" size="16" strokeWidth="2" aria-hidden="true" />
                </ori-button>

                <ng-template [sideOffset]="4" [side]="RdxPositionSide.Bottom" rdxTooltipContent>
                    <ori-tooltip-content-attributes class="px-2 py-1 text-xs">
                        Pan bottom
                        <kbd
                            class="border-border bg-background text-muted-foreground/70 -me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                        >
                            ⌘B
                        </kbd>
                    </ori-tooltip-content-attributes>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Tooltip07Component {
    protected readonly ChevronUpIcon = ChevronUp;
    protected readonly RdxPositionSide = RdxPositionSide;
    protected readonly ChevronLeftIcon = ChevronLeft;
    protected readonly CircleIcon = Circle;
    protected readonly ChevronRight = ChevronRight;
    protected readonly ChevronDown = ChevronDown;
}
