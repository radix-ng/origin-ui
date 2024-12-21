import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '@origin-ui/components/tabs';

@Component({
    selector: 'demo-tab-06',
    standalone: true,
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent],
    template: `
        <ori-tabs defaultValue="tab-1">
            <ori-tabs-list class="bg-background h-auto -space-x-px p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
                <ori-tabs-trigger
                    class="border-border data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
                    value="tab-1"
                >
                    Tab 1
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="border-border data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
                    value="tab-2"
                >
                    Tab 2
                </ori-tabs-trigger>
                <ori-tabs-trigger
                    class="border-border data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
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
export default class Tab06Component {}
