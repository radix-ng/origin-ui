import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";

@Component({
  selector: "demo-input-02",
  standalone:true,
  imports: [OriInputComponent],
  template: `
    <div class="space-y-2">
      <label for="input-02">
        Required input <span class="text-destructive">*</span>
      </label>
      <ori-input [id]="'input-02'" placeholder="Email" type="email" required class="block"/>
    </div>
  `
})
export default class Input02Component {}
