import {Component} from "@angular/core";
import {LucideAngularModule, ArrowRight} from "lucide-angular";
import {IllustrationComponent} from "../components/illustration.component";

@Component({
  selector: 'app-page-index',
  standalone: true,
  imports: [LucideAngularModule, IllustrationComponent],
  host: {
    class: 'contents'
  },
  templateUrl: './index.component.html',
})
export default class PageIndexComponent {

  readonly ArrowRightIcon = ArrowRight;
}
