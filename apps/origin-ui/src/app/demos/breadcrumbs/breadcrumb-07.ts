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
    selector: 'demo-breadcrumb-07',
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
            <ol
                class="border-border bg-background rounded-lg border px-3 py-2 shadow-sm shadow-black/5"
                oriBreadcrumbList
            >
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
export default class Breadcrumb07Component {
    protected readonly Home = Home;
}
