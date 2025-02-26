import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
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
            toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:shadow-black/5',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
                'group-[.toast]:data-[button]:h-8 group-[.toast]:data-[button]:rounded-lg group-[.toast]:data-[button]:px-3 group-[.toast]:data-[button]:text-xs group-[.toast]:data-[button]:font-medium',
            cancelButton:
                'group-[.toast]:data-[button]:h-8 group-[.toast]:data-[button]:rounded-lg group-[.toast]:data-[button]:px-3 group-[.toast]:data-[button]:text-xs group-[.toast]:data-[button]:font-medium'
        }
    });

    protected readonly computedClass = computed(() => cn('toaster group', this.sonnerClass()));
}
