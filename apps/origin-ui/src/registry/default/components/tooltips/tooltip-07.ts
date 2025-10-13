import { Component } from '@angular/core';
import { RdxTooltipTrigger } from '@radix-ng/primitives/tooltip2';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle, LucideAngularModule } from 'lucide-angular';
import { OriButton } from '~/registry/default/ui/button';
import { OriTooltip, OriTooltipContent } from '~/registry/default/ui/tooltip';

@Component({
    selector: 'demo-tooltip-07',
    imports: [
        OriTooltipContent,
        OriButton,
        OriTooltip,
        RdxTooltipTrigger,
        LucideAngularModule
    ],
    template: `
        <div class="inline-grid w-fit grid-cols-3 gap-1">
            <ng-container [delayDuration]="0" oriTooltip>
                <button
                    class="col-start-2"
                    oriButton
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera up"
                >
                    <lucide-angular [img]="ChevronUpIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </button>

                <ori-tooltip-content contentClass="px-2 py-1 text-xs" side="top">
                    Pan top
                    <kbd
                        class="border-border bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                    >
                        ⌘T
                    </kbd>
                </ori-tooltip-content>
            </ng-container>

            <ng-container [delayDuration]="0" oriTooltip>
                <button
                    class="col-start-1"
                    oriButton
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera left"
                >
                    <lucide-angular [img]="ChevronLeftIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </button>

                <ori-tooltip-content contentClass="px-2 py-1 text-xs" side="left">
                    Pan left
                    <kbd
                        class="border-border bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                    >
                        ⌘L
                    </kbd>
                </ori-tooltip-content>
            </ng-container>

            <div class="flex items-center justify-center" aria-hidden="true">
                <lucide-angular class="opacity-60" [img]="CircleIcon" size="16" strokeWidth="2" />
            </div>

            <ng-container [delayDuration]="0" oriTooltip>
                <button oriButton variant="outline" size="icon" rdxTooltipTrigger aria-label="Pan camera right">
                    <lucide-angular [img]="ChevronRight" size="16" strokeWidth="2" aria-hidden="true" />
                </button>

                <ori-tooltip-content contentClass="px-2 py-1 text-xs" side="right">
                    Pan right
                    <kbd
                        class="border-border bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                    >
                        ⌘R
                    </kbd>
                </ori-tooltip-content>
            </ng-container>

            <ng-container [delayDuration]="0" oriTooltip>
                <button
                    class="col-start-2"
                    oriButton
                    variant="outline"
                    size="icon"
                    rdxTooltipTrigger
                    aria-label="Pan camera down"
                >
                    <lucide-angular [img]="ChevronDown" size="16" strokeWidth="2" aria-hidden="true" />
                </button>

                <ori-tooltip-content contentClass="px-2 py-1 text-xs" side="bottom">
                    Pan bottom
                    <kbd
                        class="border-border bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                    >
                        ⌘B
                    </kbd>
                </ori-tooltip-content>
            </ng-container>
        </div>
    `
})
export default class Tooltip07Component {
    protected readonly ChevronUpIcon = ChevronUp;
    protected readonly ChevronLeftIcon = ChevronLeft;
    protected readonly CircleIcon = Circle;
    protected readonly ChevronRight = ChevronRight;
    protected readonly ChevronDown = ChevronDown;
}
