import { Component, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriPopoverContent } from '@origin-ui/components/popover';
import {
    RdxPopoverArrowDirective,
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverSide,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';
import { Club, Diamond, Heart, LucideAngularModule, Spade } from 'lucide-angular';

interface TourStep {
    icon: any;
    title: string;
    description: string;
}

interface CardProps {
    number: number;
    isActive: boolean;
}

@Component({
    selector: 'demo-popover-09',
    standalone: true,
    imports: [
        OriButton,
        OriPopoverContent,
        RdxPopoverRootDirective,
        RdxPopoverTriggerDirective,
        RdxPopoverContentDirective,
        LucideAngularModule,
        RdxPopoverArrowDirective
    ],
    template: `
        <div class="flex flex-col gap-4">
            <ng-container rdxPopoverRoot>
                <div class="grid grid-cols-2 place-items-center gap-4">
                    @for (item of tourSteps; track $index) {
                        <div
                            class="bg-secondary text-muted-foreground flex size-10 items-center justify-center rounded-lg text-sm font-medium"
                        >
                            {{ $index + 1 }}
                        </div>
                    }
                </div>
                <ori-button variant="outline" rdxPopoverTrigger>Start tour</ori-button>
                <ng-template [side]="RdxPopoverSide.Left" [sideOffset]="8" rdxPopoverContent>
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
                        <div class="fill-popover -my-px drop-shadow-[0_1px_0_hsl(var(--border))]" rdxPopoverArrow></div>
                    </ori-popover-content>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Popover09Component {
    protected readonly RdxPopoverSide = RdxPopoverSide;

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
