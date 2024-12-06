import { Component } from '@angular/core';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { IllustrationComponent } from '../components/illustration.component';

@Component({
    selector: 'app-page-index',
    standalone: true,
    imports: [LucideAngularModule, IllustrationComponent],
    host: {
        class: 'contents'
    },
    templateUrl: './index.component.html'
})
export default class PageIndexComponent {
    readonly ArrowRightIcon = ArrowRight;
}
