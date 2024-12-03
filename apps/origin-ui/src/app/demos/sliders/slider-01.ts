import {Component} from "@angular/core";
import {OriSlider} from "@origin-ui/components/slider";


@Component({
  selector: "demo-slider-01",
  standalone:true,
  imports: [OriSlider],
  template: `
    <div class="space-y-4">
        <ori-slider [defaultValue]="[10]" [step]="10" />
    </div>
  `
})
export default class Slider01Component {}
