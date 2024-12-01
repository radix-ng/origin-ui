import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";

@Component({
  selector: "demo-input-03",
  standalone:true,
  imports: [OriInputComponent],
  template: `
    <div class="space-y-2">
      <label for="input-03">Input with helper text</label>
      <ori-input [id]="'input-03'" placeholder="Email" type="email" class="block"/>
      <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        We won&lsquo;t share your email with anyone
      </p>
    </div>
  `
})
export default class Input03Component {}
