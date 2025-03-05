import { Component, input, output } from '@angular/core';
import { CircleCheck, LucideAngularModule, X } from 'lucide-angular';
import { toast, toastState } from 'ngx-sonner';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-notification-22',
    imports: [OriButton],
    template: `
        <button (click)="openSonner()" oriButton variant="outline">Custom sonner</button>
    `
})
export default class Notification22Component {
    toastIdCounter = 0;

    openSonner() {
        toast.custom(CustomSonner, {
            componentProps: {
                toastId: `custom-toast-${this.toastIdCounter}`,
                toast
            },
            id: `custom-toast-${this.toastIdCounter}`
        });

        this.toastIdCounter++;
    }
}

@Component({
    selector: 'custom-sonner-22',
    imports: [
        OriButton,
        LucideAngularModule
    ],
    template: `
        <div class="bg-background text-foreground w-full rounded-md border px-4 py-3 shadow-lg sm:w-[var(--width)]">
            <div class="flex gap-2">
                <div class="flex grow gap-3">
                    <lucide-angular
                        class="mt-0.5 shrink-0 text-emerald-500"
                        [img]="CircleCheck"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    <div class="flex grow justify-between gap-12">
                        <p class="text-sm">Message sent</p>
                        <div class="text-sm whitespace-nowrap">
                            <button class="text-sm font-medium hover:underline">View</button>
                            {{ ' ' }}
                            <span class="text-muted-foreground mx-1">·</span>
                            {{ ' ' }}
                            <button class="text-sm font-medium hover:underline" (click)="close()">Undo</button>
                        </div>
                    </div>
                </div>
                <button
                    class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                    (click)="close()"
                    oriButton
                    variant="ghost"
                    aria-label="Close banner"
                >
                    <lucide-angular
                        class="opacity-60 transition-opacity group-hover:opacity-100"
                        [img]="X"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    `
})
export class CustomSonner {
    readonly toast = input.required<typeof toastState>();

    readonly toastId = input.required<string>();

    readonly closeToast = output<void>();

    protected readonly CircleCheck = CircleCheck;
    protected readonly X = X;

    close() {
        this.toast().dismiss(this.toastId());
    }
}
