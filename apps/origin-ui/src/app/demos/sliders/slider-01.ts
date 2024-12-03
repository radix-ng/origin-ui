import {Component} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";
import {OriLabel} from "@origin-ui/components/label";


@Component({
  selector: "demo-slider-01",
  standalone:true,
  imports: [OriSlider, OriLabel],
  template: `
      <div class="flex flex-col gap-4">
          <ori-label>Simple slider</ori-label>
          <ori-slider [defaultValue]="[25]" aria-label="Simple slider"/>
      </div>
  `
})
export default class Slider01Component {}
