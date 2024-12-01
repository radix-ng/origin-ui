import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";

@Component({
  selector: "demo-input-01",
  standalone:true,
  imports: [OriInputComponent],
  template: `
    <div class="space-y-2">
      <label for="input-01">Simple input</label>
      <ori-input [id]="'input-01'" placeholder="Email" type="email" class="block"/>
    </div>
  `
})
export default class Input01Component {}
