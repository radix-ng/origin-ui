import { Component, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriPopoverContent } from '@origin-ui/components/popover';
import { RdxPositionSide } from '@radix-ng/primitives/core';
import {
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';

@Component({
    selector: 'demo-popover-05',
    imports: [
        OriButton,
        OriPopoverContent,
        RdxPopoverRootDirective,
        RdxPopoverTriggerDirective,
        RdxPopoverContentDirective
    ],
    template: `
        <div class="flex flex-col gap-4">
            <ng-container rdxPopoverRoot>
                <ori-button variant="outline" rdxPopoverTrigger>Tooltip-like with steps</ori-button>
                <ng-template [side]="RdxPopoverSide.Top" [sideOffset]="4" rdxPopoverContent>
                    <ori-popover-content class="max-w-[280px] py-3 shadow-none">
                        <div class="space-y-3">
                            <div class="space-y-1">
                                <p class="text-[13px] font-medium">{{ tips[currentTip()].title }}</p>
                                <p class="text-muted-foreground text-xs">{{ tips[currentTip()].description }}</p>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                                <span class="text-muted-foreground text-xs">
                                    {{ currentTip() + 1 }} / {{ tips.length }}
                                </span>
                                <button class="text-xs font-medium hover:underline" (click)="handleNavigation()">
                                    {{ currentTip() == tips.length - 1 ? 'Start over' : 'Next' }}
                                </button>
                            </div>
                        </div>
                    </ori-popover-content>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Popover05Component {
    protected readonly RdxPopoverSide = RdxPositionSide;

    readonly currentTip = signal<number>(0);

    tips = [
        {
            title: 'Welcome to Dashboard',
            description:
                "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more."
        },
        {
            title: 'Quick Actions',
            description: 'Use the toolbar above to create new projects, invite team members, or access settings.'
        },
        {
            title: 'Need Help?',
            description: 'Click the support icon in the top right corner to access our help center and documentation.'
        }
    ];

    handleNavigation() {
        if (this.currentTip() === this.tips.length - 1) {
            this.currentTip.set(0);
        } else {
            this.currentTip.set(this.currentTip() + 1);
        }
    }
}
