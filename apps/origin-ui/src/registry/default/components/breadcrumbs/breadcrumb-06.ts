import { Component } from '@angular/core';
import {
    OriBreadcrumbDirective,
    OriBreadcrumbItemDirective,
    OriBreadcrumbLinkDirective,
    OriBreadcrumbListDirective,
    OriBreadcrumbPageDirective,
    OriBreadcrumbSeparatorComponent
} from '~/registry/default/ui/breadcrumb';
import { Home, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-breadcrumb-06',
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
                    <a oriBreadcrumbLink href="#">
                        <lucide-angular [img]="Home" size="16" aria-hidden="true" strokeWidth="2" />
                        <span class="sr-only">Home</span>
                    </a>
                </li>
                <li oriBreadcrumbSeparator>
                    <span>·</span>
                </li>
                <li oriBreadcrumbItem>
                    <a oriBreadcrumbLink href="#">Components</a>
                </li>
                <li oriBreadcrumbSeparator>
                    <span>·</span>
                </li>
                <li oriBreadcrumbItem>
                    <span oriBreadcrumbPage>Breadcrumb</span>
                </li>
            </ol>
        </nav>
    `
})
export default class Breadcrumb06Component {
    protected readonly Home = Home;
}
