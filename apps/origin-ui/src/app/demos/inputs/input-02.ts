import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";
import {OriLabelComponent} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-02",
  standalone:true,
  imports: [OriInputComponent, OriLabelComponent],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-02'">
        Required input <span class="text-destructive">*</span>
      </ori-label>
      <ori-input [id]="'input-02'" placeholder="Email" type="email" required class="block"/>
    </div>
  `
})
export default class Input02Component {}
