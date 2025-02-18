import { Component, output } from '@angular/core';
import { OriButton } from '~/registry/ui/button';
import { CircleCheck, LucideAngularModule, X } from 'lucide-angular';
import { toast } from 'ngx-sonner';

@Component({
    selector: 'demo-notification-22',
    imports: [OriButton],
    template: `
        <button (click)="openSonner()" oriButton variant="outline">Custom sonner</button>
    `
})
export default class Notification22Component {
    openSonner() {
        toast.custom(CustomSonner);
    }
}

@Component({
    selector: 'custom-sonner-22',
    imports: [
        OriButton,
        LucideAngularModule
    ],
    template: `
        <div class="border-border bg-background w-[var(--width)] rounded-lg border px-4 py-3">
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
                        <div class="whitespace-nowrap text-sm">
                            <button class="text-sm font-medium hover:underline">View</button>
                            {{ ' ' }}
                            <span class="text-muted-foreground mx-1">·</span>
                            {{ ' ' }}
                            <button class="text-sm font-medium hover:underline" (click)="closeToast.emit()">
                                Undo
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                    (click)="closeToast.emit()"
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
    closeToast = output<void>();

    protected readonly CircleCheck = CircleCheck;
    protected readonly X = X;
}
