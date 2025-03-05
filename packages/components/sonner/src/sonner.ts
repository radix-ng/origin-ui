import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { NgxSonnerToaster, ToasterProps } from 'ngx-sonner';

@Component({
    selector: 'ori-sonner',
    imports: [NgxSonnerToaster],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ngx-sonner-toaster
            [class]="computedClass()"
            [style]="sonnerStyle()"
            [toastOptions]="toastOptions()"
            [theme]="theme()"
            [position]="position()"
        />
    `
})
export class OriSonner {
    readonly sonnerClass = input<string>();

    readonly sonnerStyle = input<Record<string, string>>({});

    readonly theme = input<ToasterProps['theme']>('system');

    readonly position = input<ToasterProps['position']>('top-right');

    readonly toastOptions = input<ToasterProps['toastOptions']>({
        classes: {
            toast: 'group toast group-[.toaster]-not-data-[styled=false]:bg-background group-[.toaster]-not-data-[styled=false]:text-foreground group-[.toaster]-not-data-[styled=false]:border-border group-[.toaster]-not-data-[styled=false]:shadow-lg',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
                'data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-md data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium',
            cancelButton:
                'data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-md data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium'
        }
    });

    protected readonly computedClass = computed(() => cn('toaster group', this.sonnerClass()));
}
