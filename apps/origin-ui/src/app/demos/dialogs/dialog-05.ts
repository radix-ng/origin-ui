import { Component, computed, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriDialogComponent,
    OriDialogDescription,
    OriDialogFooter,
    OriDialogHeader,
    OriDialogTitle,
    OriDialogTriggerDirective
} from '@origin-ui/components/dialog';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';
import { RdxDialogCloseDirective } from '@radix-ng/primitives/dialog';
import { CircleAlert, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-dialog-05',
    imports: [
        OriDialogComponent,
        OriDialogTriggerDirective,
        RdxDialogCloseDirective,
        OriButton,
        OriDialogDescription,
        OriDialogHeader,
        OriDialogTitle,
        OriDialogFooter,
        LucideAngularModule,
        OriLabel,
        OriInput
    ],
    template: `
        <ori-button [oriDialogTrigger]="dialog" variant="outline">Delete project</ori-button>

        <ng-template #dialog>
            <ori-dialog-content>
                <div class="flex flex-col items-center gap-2">
                    <div
                        class="border-border flex size-9 shrink-0 items-center justify-center rounded-full border"
                        aria-hidden="true"
                    >
                        <lucide-angular class="opacity-80" [img]="CircleAlert" size="16" strokeWidth="2" />
                    </div>

                    <ori-dialog-header>
                        <ori-dialog-title class="sm:text-center">Final confirmation</ori-dialog-title>
                        <ori-dialog-description class="sm:text-center">
                            This action cannot be undone. To confirm, please enter the project name {{ ' ' }}
                            <span class="text-foreground">Origin UI</span>
                            .
                        </ori-dialog-description>
                    </ori-dialog-header>
                </div>
                <form class="space-y-5">
                    <div class="space-y-2">
                        <ori-label class="block" htmlFor="ori-1">Project name</ori-label>
                        <ori-input
                            class="flex"
                            id="ori-1"
                            [value]="inputValue()"
                            (valueChange)="handleValueChange($event)"
                            type="text"
                            placeholder="Type Origin UI to confirm"
                        />
                    </div>
                    <ori-dialog-footer>
                        <ori-button class="flex flex-1" type="button" variant="outline" rdxDialogClose>
                            Cancel
                        </ori-button>
                        <ori-button class="flex flex-1" [disabled]="isDisabled()" type="button" rdxDialogClose>
                            Delete
                        </ori-button>
                    </ori-dialog-footer>
                </form>
            </ori-dialog-content>
        </ng-template>
    `
})
export default class Dialog05Component {
    private readonly PROJECT_NAME = 'Origin UI';

    protected readonly CircleAlert = CircleAlert;

    readonly inputValue = signal<string>('');

    readonly isDisabled = computed(() => this.inputValue() !== this.PROJECT_NAME);

    handleValueChange($event: string) {
        this.inputValue.set($event);
    }
}
