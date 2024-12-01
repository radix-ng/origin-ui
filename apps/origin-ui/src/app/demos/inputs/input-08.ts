import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";

@Component({
  selector: "demo-input-08",
  standalone:true,
  imports: [OriInputComponent],
  template: `
    <div class="space-y-2">
      <label for="input-08">Disabled input</label>
      <ori-input [id]="'input-08'" placeholder="Email" type="email" disabled class="block"/>
    </div>
  `
})
export default class Input08Component {}
