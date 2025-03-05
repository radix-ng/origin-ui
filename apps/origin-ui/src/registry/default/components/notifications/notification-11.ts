import { Component } from '@angular/core';
import { LucideAngularModule, TriangleAlert, X } from 'lucide-angular';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-notification-11',
    imports: [OriButton, LucideAngularModule],
    template: `
        <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
            <div class="flex gap-2">
                <div class="flex grow gap-3">
                    <lucide-angular
                        class="mt-0.5 shrink-0 text-amber-500"
                        [img]="TriangleAlert"
                        size="16"
                        aria-hidden="true"
                    />
                    <div class="flex grow flex-col gap-3">
                        <div class="space-y-1">
                            <p class="text-sm font-medium">Something requires your action!</p>
                            <p class="text-muted-foreground text-sm">
                                It conveys that a specific action is needed to resolve or address a situation.
                            </p>
                        </div>
                        <div>
                            <button oriButton size="sm">Learn more</button>
                        </div>
                    </div>
                </div>
                <button
                    class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                    oriButton
                    variant="ghost"
                    aria-label="Close notification"
                >
                    <lucide-angular
                        class="opacity-60 transition-opacity group-hover:opacity-100"
                        [img]="X"
                        size="16"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    `
})
export default class Notification11 {
    protected readonly X = X;
    protected readonly TriangleAlert = TriangleAlert;
}
