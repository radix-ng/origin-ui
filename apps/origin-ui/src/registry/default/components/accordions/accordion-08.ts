import { Component } from '@angular/core';
import { RdxAccordionHeaderDirective, RdxAccordionTriggerDirective } from '@radix-ng/primitives/accordion';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { OriAccordion, OriAccordionContent, OriAccordionItem } from '~/registry/default/ui/accordion';

@Component({
    selector: 'accordion-08',
    imports: [
        OriAccordion,
        OriAccordionItem,
        LucideAngularModule,
        RdxAccordionHeaderDirective,
        RdxAccordionTriggerDirective,
        OriAccordionContent
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">W/ sub-header and plus-minus</h2>
            <div class="w-full" type="single" oriAccordion collapsible defaultValue="3">
                @for (item of items; track $index) {
                    <div class="py-2" [value]="item.id" oriAccordionItem>
                        <h3 class="group flex" rdxAccordionHeader>
                            <button
                                class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>*>svg]:rotate-180 [&[data-state=open]>*>svg>path:last-child]:rotate-90 [&[data-state=open]>*>svg>path:last-child]:opacity-0"
                                rdxAccordionTrigger
                                type="button"
                            >
                                <span class="flex flex-col space-y-1">
                                    <span>{{ item.title }}</span>
                                    @if (item.sub) {
                                        <span class="text-sm font-normal">{{ item.sub }}</span>
                                    }
                                </span>
                                <lucide-icon
                                    class="pointer-events-none shrink-0 opacity-80 transition-transform duration-200"
                                    [img]="Plus"
                                    size="16"
                                    aria-hidden="true"
                                />
                            </button>
                        </h3>
                        <div classContent="text-muted-foreground pb-2" oriAccordionContent>
                            {{ item.content }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion08Component {
    readonly items = [
        {
            id: '1',
            title: 'Connected accounts',
            sub: 'Manage your linked social and work accounts',
            content:
                'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.'
        },
        {
            id: '2',
            title: 'Notifications',
            sub: 'Customize your notification preferences',
            content:
                'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.'
        },
        {
            id: '3',
            title: '2-step verification',
            sub: 'Add an extra layer of security to your account',
            content:
                'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.'
        },
        {
            id: '4',
            title: 'Contact support',
            sub: "We're here to help 24/7",
            content:
                'Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.'
        }
    ];
    protected readonly Plus = Plus;
}
