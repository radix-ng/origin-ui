import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";
import {OriLabelComponent} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-01",
  standalone:true,
  imports: [OriInputComponent, OriLabelComponent],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-01'">Simple input</ori-label>
      <ori-input [id]="'input-01'" placeholder="Email" type="email" class="block"/>
    </div>
  `
})
export default class Input01Component {}
