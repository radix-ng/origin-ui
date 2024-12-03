import {Component} from "@angular/core";
import {OriInput} from "@origin-ui/components/input";
import {LucideAngularModule, Eye, EyeOff} from "lucide-angular";
import {OriLabel} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-23",
  standalone:true,
  imports: [OriInput, OriLabel, LucideAngularModule],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-23'">Show/hide password input</ori-label>
      <div class="relative">
        <ori-input [id]="'input-23'"
                   class="contents pe-9"
                   placeholder="Password"
                   [type]="isVisible ? 'text' : 'password'" />
          <button
            class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            (click)="toggleVisibility()"
            [attr.aria-pressed]="isVisible"
            [attr.aria-label]="isVisible ? 'Hide password' : 'Show password'"
            aria-controls="password"
          >
            <lucide-angular [img]="isVisible ? EyeOffIcon : EyeIcon" size="16" strokeWidth="2" aria-hidden="true" />
          </button>
      </div>
    </div>
  `
})
export default class Input23Component {
  readonly EyeIcon = Eye;
  readonly EyeOffIcon = EyeOff;

  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
