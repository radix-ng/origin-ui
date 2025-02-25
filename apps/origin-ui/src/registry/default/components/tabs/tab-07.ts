import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '~/registry/default/ui/tabs';

@Component({
    selector: 'demo-tab-07',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent],
    template: `
        <ori-tabs defaultValue="tab-1">
            <ori-tabs-list
                class="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px"
            >
                <ori-tabs-trigger
                    class="border-border bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                    value="tab-1"
                >
                    Tab 1
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="border-border bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                    value="tab-2"
                >
                    Tab 2
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="border-border bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                    value="tab-3"
                >
                    Tab 3
                </ori-tabs-trigger>
            </ori-tabs-list>
            <div oriTabsContent value="tab-1">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
            </div>
            <div oriTabsContent value="tab-2">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
            </div>
            <div oriTabsContent value="tab-3">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
            </div>
        </ori-tabs>
    `
})
export default class Tab07Component {}
