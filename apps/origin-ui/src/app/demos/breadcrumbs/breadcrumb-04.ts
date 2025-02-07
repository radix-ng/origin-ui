import { Component } from '@angular/core';
import {
    OriBreadcrumbDirective,
    OriBreadcrumbItemDirective,
    OriBreadcrumbLinkDirective,
    OriBreadcrumbListDirective,
    OriBreadcrumbPageDirective,
    OriBreadcrumbSeparatorComponent
} from '@origin-ui/components/breadcrumb';
import { Component as ComponentIcon, Home, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-breadcrumb-04',
    imports: [
        OriBreadcrumbDirective,
        OriBreadcrumbItemDirective,
        OriBreadcrumbLinkDirective,
        OriBreadcrumbListDirective,
        OriBreadcrumbSeparatorComponent,
        OriBreadcrumbPageDirective,
        LucideAngularModule
    ],
    template: `
        <nav oriBreadcrumb>
            <ol oriBreadcrumbList>
                <li oriBreadcrumbItem>
                    <a class="inline-flex items-center gap-1.5" oriBreadcrumbLink href="#">
                        <lucide-angular [img]="Home" size="16" aria-hidden="true" strokeWidth="2" />
                        Home
                    </a>
                </li>
                <li oriBreadcrumbSeparator></li>
                <li oriBreadcrumbItem>
                    <a class="inline-flex items-center gap-1.5" oriBreadcrumbLink href="#">
                        <lucide-angular [img]="ComponentIcon" size="16" aria-hidden="true" strokeWidth="2" />
                        Components
                    </a>
                </li>
                <li oriBreadcrumbSeparator></li>
                <li oriBreadcrumbItem>
                    <span oriBreadcrumbPage>Breadcrumb</span>
                </li>
            </ol>
        </nav>
    `
})
export default class Breadcrumb04Component {
    protected readonly Home = Home;
    protected readonly ComponentIcon = ComponentIcon;
}
