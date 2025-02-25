import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '~/registry/default/ui/tabs';

@Component({
    selector: 'demo-tab-04',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent],
    template: `
        <ori-tabs defaultValue="tab-1">
            <ori-tabs-list class="border-border h-auto rounded-none border-b bg-transparent p-0">
                <ori-tabs-trigger
                    class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    value="tab-1"
                >
                    Tab 1
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    value="tab-2"
                >
                    Tab 2
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
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
export default class Tab04Component {}
