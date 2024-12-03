import {Component} from "@angular/core";
import {OriInput} from "@origin-ui/components/input";
import {OriLabel} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-03",
  standalone:true,
  imports: [OriInput, OriLabel],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-03'">Input with helper text</ori-label>
      <ori-input [id]="'input-03'" placeholder="Email" type="email" class="block"/>
      <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        We won&lsquo;t share your email with anyone
      </p>
    </div>
  `
})
export default class Input03Component {}
