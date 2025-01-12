import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriDialogComponent,
    OriDialogDescription,
    OriDialogHeader,
    OriDialogTriggerDirective
} from '@origin-ui/components/dialog';
import { Code, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-component-details',
    imports: [
        OriDialogComponent,
        OriDialogHeader,
        OriDialogTriggerDirective,
        OriDialogDescription,
        OriButton,
        LucideAngularModule
    ],
    template: `
        <ori-button
            class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
            [oriDialogTrigger]="dialog"
            variant="ghost"
            size="icon"
        >
            <lucide-angular [img]="Code" size="16" strokeWidth="2" aria-hidden="true" />
        </ori-button>

        <ng-template #dialog>
            <ori-dialog-content class="sm:max-w-[600px]">
                <ori-dialog-header>
                    <!--                    <ori-dialog-title class="text-left">Installation</ori-dialog-title>-->
                    <ori-dialog-description class="sr-only">
                        Use the CLI to add components to your project
                    </ori-dialog-description>
                </ori-dialog-header>
                <div class="min-w-0 space-y-5">
                    <div class="space-y-4">
                        <p class="text-lg font-semibold tracking-tight">Code</p>
                        <ng-content />
                    </div>
                </div>
            </ori-dialog-content>
        </ng-template>
    `
})
export class ComponentDetailsComponent {
    protected readonly Code = Code;
}
