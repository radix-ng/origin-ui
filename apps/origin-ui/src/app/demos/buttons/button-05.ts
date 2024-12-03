import {Component} from "@angular/core";
import {OriButton} from "@origin-ui/components/button";
import {LucideAngularModule, Trash} from "lucide-angular";

@Component({
    selector: "demo-button-04",
    standalone:true,
    imports: [OriButton, LucideAngularModule],
    template: `
        <ori-button variant="destructive">
          <lucide-angular [img]="TrashIcon" class="icon-wrapper" size="16" strokeWidth="2" aria-hidden="true" />
          Button
        </ori-button>
    `,
  styles: `
    ::ng-deep .icon-wrapper svg {
      @apply -ms-1 me-2 opacity-60;
    }
  `
})
export default class Button04Component {
  readonly TrashIcon = Trash;
}
