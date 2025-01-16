import { Component, input, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { cn } from '@origin-ui/components/utils';

@Component({
    selector: 'app-demo-copy-button',
    imports: [OriButton],
    template: `
        <div [class]="cn('dark absolute right-2 top-2', className())">
            <button
                class="text-muted-foreground hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
                [attr.aria-label]="copied() ? 'Copied' : 'Copy component source'"
                [disabled]="copied()"
                (click)="handleCopy()"
                oriButton
                variant="ghost"
                size="icon"
            >
                <div [class]="cn('transition-all', copied() ? 'scale-100 opacity-100' : 'scale-0 opacity-0')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true">
                        <path
                            fill="#10B981"
                            d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
                        />
                    </svg>
                </div>

                <div [class]="cn('absolute transition-all', copied() ? 'scale-0 opacity-0' : 'scale-100 opacity-100')">
                    <svg
                        class="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z"
                        />
                    </svg>
                </div>
            </button>
        </div>
    `,
    styles: ``
})
export class CopyButtonComponent {
    readonly componentSource = input<string>('');

    readonly className = input<string>();

    readonly copied = signal(false);

    protected readonly cn = cn;

    handleCopy() {
        navigator.clipboard.writeText(this.componentSource()).then(
            () => {
                this.copied.set(true);
                setTimeout(() => this.copied.set(false), 1500);

                console.log('Source code copied to clipboard!');
            },
            (err) => {
                console.error('Could not copy source code:', err);
            }
        );
    }
}
