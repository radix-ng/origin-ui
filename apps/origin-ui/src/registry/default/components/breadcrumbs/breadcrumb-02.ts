import { Component } from '@angular/core';
import {
    OriBreadcrumbDirective,
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
import { Folders, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-breadcrumb-02',
    imports: [
        OriDropdownMenuTrigger,
        OriBreadcrumbDirective,
        OriBreadcrumbItemDirective,
        OriBreadcrumbLinkDirective,
        OriBreadcrumbListDirective,
        OriBreadcrumbSeparatorComponent,
        OriDropdownMenuContent,
        OriDropdownMenuItem,
        OriBreadcrumbPageDirective,
        LucideAngularModule
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
                        <span class="flex size-5 items-center justify-center" role="presentation" aria-hidden="true">
                            <lucide-angular [img]="Folders" size="16" strokeWidth="2" />
                        </span>
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
                    <span oriBreadcrumbPage>Breadcrumb</span>
                </li>
            </ol>
        </nav>
    `
})
export default class Breadcrumb02Component {
    protected readonly Folders = Folders;
}
