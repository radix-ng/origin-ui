import {Component, Input, input, signal} from "@angular/core";
import {OriButton} from "@origin-ui/components/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-demo-copy-button',
  standalone: true,
  imports: [OriButton, NgClass],
  template: `
    <div
      class="absolute right-2 top-2 transition-opacity"
      [ngClass]="{
        'lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100': !copied()
      }"
    >
      <ori-button variant="ghost" size="icon"
                  class="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
                  [attr.aria-label]="copied() ? 'Copied' : 'Copy component source'"
                  [disabled]="copied()"
                  (click)="handleCopy()"
      >
        <div
          class="transition-all"
          [ngClass]="{ 'scale-100 opacity-100': copied(), 'scale-0 opacity-0': !copied() }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill="#10B981"
              d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
            />
          </svg>
        </div>

        <div
          class="absolute transition-all"
          [ngClass]="{ 'scale-0 opacity-0': copied(), 'scale-100 opacity-100': !copied() }"
        >
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
      </ori-button>
    </div>
  `,
  styles: `

  `
})
export class CopyButtonComponent {

  @Input() componentSource: string | null = null;

  copied = signal(false);

  handleCopy() {
    if (this.componentSource) {
      navigator.clipboard.writeText(this.componentSource).then(
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
}
