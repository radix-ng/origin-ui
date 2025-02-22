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
            class="bg-background pointer-events-none block size-5 rounded-full shadow-sm shadow-black/5 ring-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 rtl:data-[state=checked]:-translate-x-4"
            rdxSwitchThumb
        ></span>
    `
})
export class SwitchComponent {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => {
        return cn(
            'peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            this.class()
        );
    });
}
