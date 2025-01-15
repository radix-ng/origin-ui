import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';
import { CircleX, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-input-24',
    imports: [
        OriInput,
        OriLabel,
        LucideAngularModule
    ],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-24">Input with clear button</label>
            <div class="relative">
                <input
                    class="pe-9"
                    id="input-24"
                    #inputRef
                    [value]="inputValue()"
                    (valueChange)="handlerInputChange($event)"
                    oriInput
                    placeholder="Type something..."
                    type="text"
                />
                @if (inputValue()) {
                    <button
                        class="text-muted-foreground/80 hover:text-foreground focus-visible:outline-ring/70 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        (click)="handleClearInput()"
                        aria-label="Clear input"
                    >
                        <lucide-angular [img]="CircleXIcon" size="16" strokeWidth="2" aria-hidden="true" />
                    </button>
                }
            </div>
        </div>
    `
})
export default class Input24Component {
    protected readonly CircleXIcon = CircleX;

    readonly inputValue = signal('Click to clear');

    readonly inputRef = viewChild<ElementRef>('inputRef');

    handlerInputChange($event: string) {
        this.inputValue.set($event);
    }

    handleClearInput() {
        this.inputValue.set('');

        this.inputRef()?.nativeElement.focus();
    }
}
