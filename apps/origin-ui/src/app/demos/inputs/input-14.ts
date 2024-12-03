import {Component} from "@angular/core";
import {OriInput} from "@origin-ui/components/input";
import {OriLabel} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-14",
  standalone:true,
  imports: [OriInput, OriLabel],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-14'">Input with start add-on</ori-label>
      <div class="flex rounded-lg shadow-sm shadow-black/5">
        <span class="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          https://
        </span>
        <ori-input [id]="'input-14'"
                   class="contents"
                   className="-ms-px rounded-s-none shadow-none"
                   placeholder="google.com"
                   type="text" />
      </div>
    </div>
  `
})
export default class Input14Component {}
