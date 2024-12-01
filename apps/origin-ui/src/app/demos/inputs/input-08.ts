import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";
import {OriLabelComponent} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-08",
  standalone:true,
  imports: [OriInputComponent, OriLabelComponent],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-08'">Disabled input</ori-label>
      <ori-input [id]="'input-08'" placeholder="Email" type="email" disabled class="block"/>
    </div>
  `
})
export default class Input08Component {}
