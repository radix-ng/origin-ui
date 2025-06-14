import { Component, signal } from '@angular/core';
import { RdxPositionSide } from '@radix-ng/primitives/core';
import {
    RdxPopoverAnchorDirective,
    RdxPopoverArrowDirective,
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';
import { Club, Diamond, Heart, LucideAngularModule, Spade } from 'lucide-angular';
import { OriButton } from '~/registry/default/ui/button';
import { OriPopoverContent } from '~/registry/default/ui/popover';

interface TourStep {
    icon: any;
    title: string;
    description: string;
}

@Component({
    selector: 'demo-popover-09',
    imports: [
        OriButton,
        OriPopoverContent,
        RdxPopoverRootDirective,
        RdxPopoverTriggerDirective,
        RdxPopoverContentDirective,
        LucideAngularModule,
        RdxPopoverArrowDirective,
        RdxPopoverAnchorDirective
    ],
    template: `
        <div class="flex flex-col gap-4">
            <ng-container rdxPopoverRoot>
                <div class="grid grid-cols-2 place-items-center gap-4">
                    @for (item of tourSteps; track $index) {
                        @if (currentTip() === $index) {
                            <div
                                class="bg-secondary text-muted-foreground flex size-10 items-center justify-center rounded-lg text-sm font-medium"
                                rdxPopoverAnchor
                            >
                                {{ $index + 1 }}
                            </div>
                        } @else {
                            <div
                                class="bg-secondary text-muted-foreground flex size-10 items-center justify-center rounded-lg text-sm font-medium"
                            >
                                {{ $index + 1 }}
                            </div>
                        }
                    }
                </div>
                <button oriButton variant="outline" rdxPopoverTrigger>Start tour</button>
                <ng-template [side]="currentTip() % 2 === 0 ? PopoverSide.Left : PopoverSide.Right" rdxPopoverContent>
                    <ori-popover-content class="max-w-[280px] py-3 shadow-none">
                        <div class="space-y-3">
                            <div class="space-y-1">
                                <p class="text-[13px] font-medium">{{ tourSteps[currentTip()].title }}</p>
                                <p class="text-muted-foreground text-xs">{{ tourSteps[currentTip()].description }}</p>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                                <span class="text-muted-foreground text-xs">
                                    {{ currentTip() + 1 }} / {{ tourSteps.length }}
                                </span>
                                <button class="text-xs font-medium hover:underline" (click)="handleNavigation()">
                                    {{ currentTip() === tourSteps.length - 1 ? 'Start over' : 'Next' }}
                                </button>
                            </div>
                        </div>
                        <div class="fill-popover -my-px drop-shadow-[0_1px_0_var(--border)]" rdxPopoverArrow></div>
                    </ori-popover-content>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Popover09Component {
    protected readonly PopoverSide = RdxPositionSide;

    readonly currentTip = signal(0);

    handleNavigation() {
        if (this.currentTip() === this.tourSteps.length - 1) {
            this.currentTip.set(0);
        } else {
            this.currentTip.set(this.currentTip() + 1);
        }
    }

    readonly tourSteps: TourStep[] = [
        {
            icon: Heart,
            title: 'Heart',
            description:
                "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more."
        },
        {
            icon: Diamond,
            title: 'Diamond',
            description: 'Use the toolbar above to create new projects, invite team members, or access settings.'
        },
        {
            icon: Club,
            title: 'Club',
            description: 'Click the support icon in the top right corner to access our help center and documentation.'
        },
        {
            icon: Spade,
            title: 'Spade',
            description:
                'Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.'
        }
    ];
}
