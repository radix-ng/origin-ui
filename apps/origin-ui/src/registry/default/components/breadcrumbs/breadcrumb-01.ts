import { Component } from '@angular/core';
import {
    OriBreadcrumbDirective,
    OriBreadcrumbEllipsisComponent,
    OriBreadcrumbItemDirective,
    OriBreadcrumbLinkDirective,
    OriBreadcrumbListDirective,
    OriBreadcrumbPageDirective,
    OriBreadcrumbSeparatorComponent
} from '~/registry/default/ui/breadcrumb';
import {
    OriDropdownMenuContent,
    OriDropdownMenuItem,
    OriDropdownMenuTrigger
} from '~/registry/default/ui/dropdown-menu';

@Component({
    selector: 'demo-breadcrumb-01',
    imports: [
        OriDropdownMenuTrigger,
        OriBreadcrumbDirective,
        OriBreadcrumbItemDirective,
        OriBreadcrumbLinkDirective,
        OriBreadcrumbListDirective,
        OriBreadcrumbSeparatorComponent,
        OriBreadcrumbEllipsisComponent,
        OriDropdownMenuContent,
        OriDropdownMenuItem,
        OriBreadcrumbPageDirective
    ],
    template: `
        <nav oriBreadcrumb>
            <ol oriBreadcrumbList>
                <li oriBreadcrumbItem>
                    <a oriBreadcrumbLink href="#">Home</a>
                </li>
                <li oriBreadcrumbSeparator></li>
                <li oriBreadcrumbItem>
                    <button class="hover:text-foreground" [oriDropdownMenuTrigger]="menuContent">
                        <span oriBreadcrumbEllipsis></span>
                        <span class="sr-only">Toggle menu</span>
                    </button>

                    <ng-template #menuContent>
                        <div oriDropdownMenuContent>
                            <div oriDropdownMenuItem>Documentation</div>
                            <div oriDropdownMenuItem>Themes</div>
                            <div oriDropdownMenuItem>GitHub</div>
                        </div>
                    </ng-template>
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
export default class Breadcrumb01Component {}
