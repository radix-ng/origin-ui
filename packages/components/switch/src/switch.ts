import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RdxSwitchRootDirective, RdxSwitchThumbDirective } from '@radix-ng/primitives/switch';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[oriSwitch]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxSwitchThumbDirective],
    hostDirectives: [
        {
            directive: RdxSwitchRootDirective,
            inputs: ['id', 'required', 'checked', 'disabled'],
            outputs: ['onCheckedChange']
        }
    ],
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <span
            class="bg-background pointer-events-none block size-5 rounded-full shadow-xs ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:rtl:-translate-x-4"
            rdxSwitchThumb
        ></span>
    `
})
export class SwitchComponent {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => {
        return cn(
            'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:ring-ring/50 inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
            this.class()
        );
    });
}
