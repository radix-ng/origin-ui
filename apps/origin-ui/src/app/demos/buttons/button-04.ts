import {Component} from "@angular/core";
import {OriButtonComponent} from "@origin-ui/components/button";
import {LucideAngularModule, Archive} from "lucide-angular";

@Component({
    selector: "demo-button-04",
    standalone:true,
    imports: [OriButtonComponent, LucideAngularModule],
    template: `
        <ori-button>
          <lucide-angular [img]="ArchiveIcon" class="icon-wrapper" size="16" strokeWidth="2" aria-hidden="true" />
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
  readonly ArchiveIcon = Archive;
}
