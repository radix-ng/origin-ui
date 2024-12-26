import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '@origin-ui/components/tabs';
import { Box, House, LucideAngularModule, PanelsTopLeft } from 'lucide-angular';

@Component({
    selector: 'demo-tab-19',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent, LucideAngularModule],
    template: `
        <ori-tabs class="flex w-full gap-2" orientation="vertical" defaultValue="tab-1">
            <ori-tabs-list class="text-foreground flex-col gap-1 rounded-none bg-transparent px-1 py-0">
                <ori-tabs-trigger
                    class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    value="tab-1"
                >
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="HouseIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Overview
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    value="tab-2"
                >
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="PanelsTopLeftIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Projects
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    value="tab-3"
                >
                    <lucide-angular
                        class="-ms-0.5 me-1.5 opacity-60"
                        [img]="BoxIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                    Packages
                </ori-tabs-trigger>
            </ori-tabs-list>
            <div class="border-border grow rounded-lg border text-start">
                <div oriTabsContent value="tab-1">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 1</p>
                </div>
                <div oriTabsContent value="tab-2">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 2</p>
                </div>
                <div oriTabsContent value="tab-3">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 3</p>
                </div>
            </div>
        </ori-tabs>
    `
})
export default class Tab19Component {
    protected readonly HouseIcon = House;
    protected readonly PanelsTopLeftIcon = PanelsTopLeft;
    protected readonly BoxIcon = Box;
}
