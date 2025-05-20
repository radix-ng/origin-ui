import { Directive } from '@angular/core';
import {
    RdxCollapsibleContentDirective,
    RdxCollapsibleContentPresenceDirective,
    RdxCollapsibleRootDirective,
    RdxCollapsibleTriggerDirective
} from '@radix-ng/primitives/collapsible';

@Directive({
    selector: '[oriCollapsible]',
    hostDirectives: [{ directive: RdxCollapsibleRootDirective, inputs: ['open', 'disabled', 'contentId'] }]
})
export class OriCollapsible {}

@Directive({
    selector: '[oriCollapsibleTrigger]',
    hostDirectives: [RdxCollapsibleTriggerDirective]
})
export class OriCollapsibleTrigger {}

@Directive({
    selector: '[oriCollapsibleContent]',
    hostDirectives: [RdxCollapsibleContentDirective]
})
export class OriCollapsibleContent {}

@Directive({
    selector: '[oriCollapsibleContent]',
    hostDirectives: [RdxCollapsibleContentPresenceDirective]
})
export class OriCollapsibleContentPresence {}
