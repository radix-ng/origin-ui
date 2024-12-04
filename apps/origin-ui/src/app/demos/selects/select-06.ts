import {Component} from "@angular/core";
import {OriLabel} from "@origin-ui/components/label";
import {OriSelectNative} from "@origin-ui/components/select-native";

@Component({
  selector: "demo-select-06",
  standalone:true,
  imports: [OriSelectNative, OriLabel],
  template: `
      <div class="flex flex-col gap-2 [&_svg]:text-destructive/80">
          <ori-label [htmlFor]="'select-06'">Select with error (native)</ori-label>
          <ori-select-native
              [id]="'select-06'"
              className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
          >
              <option value="s1">React</option>
              <option value="s2">Next.js</option>
              <option value="s3">Astro</option>
              <option value="s4">Gatsby</option>
          </ori-select-native>
          <p class="text-xs text-destructive" role="alert" aria-live="polite">
              Selected option is invalid
          </p>
      </div>
  `
})
export default class Select06Component {}