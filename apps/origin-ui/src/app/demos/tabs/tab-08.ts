import { Component } from '@angular/core';
import { OriBadgeComponent } from '@origin-ui/components/badge';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '@origin-ui/components/tabs';
import { Box, House, LucideAngularModule, PanelsTopLeft } from 'lucide-angular';

@Component({
    selector: 'demo-tab-08',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent, LucideAngularModule, OriBadgeComponent],
    template: `
        <ori-tabs defaultValue="tab-1">
            <ori-tabs-list class="mb-3">
                <ori-tabs-trigger value="tab-1">
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="HouseIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Overview
                </ori-tabs-trigger>
                <ori-tabs-trigger class="group" value="tab-2">
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="PanelsTopLeftIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Projects
                    <ori-badge
                        class="bg-primary/15 ms-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50"
                        variant="secondary"
                    >
                        3
                    </ori-badge>
                </ori-tabs-trigger>
                <ori-tabs-trigger class="group" value="tab-3">
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="BoxIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Packages
                    <ori-badge class="ms-1.5 transition-opacity group-data-[state=inactive]:opacity-50">New</ori-badge>
                </ori-tabs-trigger>
            </ori-tabs-list>
            <div oriTabsContent value="tab-1">
                <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 1</p>
            </div>
            <div oriTabsContent value="tab-2">
                <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 2</p>
            </div>
            <div oriTabsContent value="tab-3">
                <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 3</p>
            </div>
        </ori-tabs>
    `
})
export default class Tab08Component {
    protected readonly HouseIcon = House;
    protected readonly PanelsTopLeftIcon = PanelsTopLeft;
    protected readonly BoxIcon = Box;
}
