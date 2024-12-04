import {Component} from "@angular/core";
import {OriLabel} from "@origin-ui/components/label";
import {OriSelectNative} from "@origin-ui/components/select-native";

@Component({
  selector: "demo-select-13",
  standalone:true,
  imports: [OriSelectNative, OriLabel],
  template: `
      <div class="group relative">
          <ori-label [htmlFor]="'select-13'"
                     className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[select:disabled]:opacity-50"
          >
              Select with overlapping label (native)
          </ori-label>
          <ori-select-native [id]="'select-13'">
              <option value="" disabled>
                  Select framework
              </option>
              <option value="s1">React</option>
              <option value="s2">Next.js</option>
              <option value="s3">Astro</option>
              <option value="s4">Gatsby</option>
          </ori-select-native>
      </div>
  `
})
export default class Select13Component {}