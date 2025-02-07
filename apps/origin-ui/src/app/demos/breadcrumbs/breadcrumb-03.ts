import { Component } from '@angular/core';
import {
    OriBreadcrumbDirective,
    OriBreadcrumbItemDirective,
    OriBreadcrumbLinkDirective,
    OriBreadcrumbListDirective,
    OriBreadcrumbPageDirective,
    OriBreadcrumbSeparatorComponent
} from '@origin-ui/components/breadcrumb';
import { Home, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-breadcrumb-03',
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
                <li oriBreadcrumbSeparator></li>
                <li oriBreadcrumbItem>
                    <a oriBreadcrumbLink href="#">Components</a>
                </li>
                <li oriBreadcrumbSeparator></li>
                <li oriBreadcrumbItem>
                    <span oriBreadcrumbPage>Breadcrumb</span>
                </li>
            </ol>
        </nav>
    `
})
export default class Breadcrumb03Component {
    protected readonly Home = Home;
}
