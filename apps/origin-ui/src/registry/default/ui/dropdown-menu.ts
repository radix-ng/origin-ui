import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import {
    RdxDropdownMenuContentDirective,
    RdxDropdownMenuItemCheckboxDirective,
    RdxDropdownMenuItemDirective,
    RdxDropdownMenuItemIndicatorDirective,
    RdxDropdownMenuItemRadioDirective,
    RdxDropdownMenuItemRadioGroupDirective,
    RdxDropdownMenuLabelDirective,
    RdxDropdownMenuSeparatorDirective,
    RdxDropdownMenuTriggerDirective
} from '@radix-ng/primitives/dropdown-menu';
import { Check, ChevronRight, Circle, LucideAngularModule } from 'lucide-angular';
import { cn } from '~/registry/default/lib/utils';

@Directive({
    selector: '[oriDropdownMenuTrigger]',
    hostDirectives: [
        {
            directive: RdxDropdownMenuTriggerDirective,
            inputs: [
                'rdxDropdownMenuTrigger: oriDropdownMenuTrigger',
                'disabled',
                'side',
                'align',
                'sideOffset',
                'alignOffset'
            ],
            outputs: ['onOpenChange']
        }
    ]
})
export class OriDropdownMenuTrigger {}

@Directive({
    selector: '[oriDropdownMenuContent]',
    hostDirectives: [
        {
            directive: RdxDropdownMenuContentDirective,
            inputs: ['closeOnEscape', 'onEscapeKeyDown']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuContent {
    readonly class = input<string>();

    readonly computedClass = computed(() =>
        cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-40 overflow-hidden rounded-md border p-1 shadow-lg',
            this.class()
        )
    );
}

@Directive({
    selector: '[oriDropdownMenuSubContent]',
    hostDirectives: [
        {
            directive: RdxDropdownMenuContentDirective,
            inputs: ['closeOnEscape', 'onEscapeKeyDown']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuSubContent {
    readonly class = input<string>();

    readonly computedClass = computed(() =>
        cn(
            'z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            this.class()
        )
    );
}

@Directive({
    selector: '[oriDropdownMenuItem]',
    hostDirectives: [
        {
            directive: RdxDropdownMenuItemDirective,
            inputs: ['disabled'],
            outputs: ['onSelect']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuItem {
    readonly class = input<string>();
    readonly inset = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    computedClass = computed(() =>
        cn(
            'focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0',
            this.inset() && 'pl-8',
            this.class()
        )
    );
}

@Directive({
    selector: '[oriDropdownMenuLabel]',
    hostDirectives: [RdxDropdownMenuLabelDirective],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuLabel {
    readonly class = input<string>();

    readonly inset = input(false, {
        transform: booleanAttribute
    });

    readonly computedClass = computed(() =>
        cn(
            'text-muted-foreground px-2 py-1.5 text-xs font-medium data-[inset]:pl-8',
            this.inset() && 'pl-8',
            this.class()
        )
    );
}

@Directive({
    selector: '[oriDropdownMenuSeparator]',
    hostDirectives: [RdxDropdownMenuSeparatorDirective],
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuSeparator {
    readonly class = input<string>();

    readonly computedClass = computed(() => cn('bg-border -mx-1 my-1 h-px', this.class()));
}

@Directive({
    selector: 'span[oriDropdownMenuShortcut]',
    host: {
        '[class]': 'computedClass()'
    }
})
export class OriDropdownMenuShortcut {
    readonly class = input<string>();

    readonly computedClass = computed(() =>
        cn(
            'bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium',
            this.class()
        )
    );
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[oriDropdownMenuSubTrigger]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule],
    hostDirectives: [
        OriDropdownMenuItem,
        {
            directive: RdxDropdownMenuTriggerDirective,
            inputs: [
                'rdxDropdownMenuTrigger: oriDropdownMenuSubTrigger',
                'disabled',
                'side',
                'align',
                'sideOffset',
                'alignOffset'
            ],
            outputs: ['onOpenChange']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
        <lucide-angular class="text-muted-foreground/80 ml-auto" [img]="ChevronRight" />
    `
})
export class OriDropdownMenuSubTrigger {
    readonly class = input<string>();
    readonly inset = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    computedClass = computed(() =>
        cn(
            'flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
            this.inset() && 'pl-8',
            this.class()
        )
    );

    protected readonly ChevronRight = ChevronRight;
}

@Directive({
    selector: '[oriDropdownMenuRadioGroup]',
    hostDirectives: [
        {
            directive: RdxDropdownMenuItemRadioGroupDirective,
            inputs: ['value'],
            outputs: ['valueChange']
        }
    ]
})
export class OriDropdownMenuRadioGroup {}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[oriDropdownMenuRadioItem]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule, RdxDropdownMenuItemIndicatorDirective],
    hostDirectives: [
        {
            directive: RdxDropdownMenuItemRadioDirective,
            inputs: ['value', 'disabled']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <lucide-angular class="h-2 w-2 fill-current" [img]="Circle" rdxDropdownMenuItemIndicator />
        </span>
        <ng-content></ng-content>
    `
})
export class OriDropdownMenuRadioItem {
    readonly class = input<string>();

    readonly computedClass = computed(() =>
        cn(
            'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            this.class()
        )
    );
    protected readonly Circle = Circle;
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[oriDropdownMenuCheckboxItem]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RdxDropdownMenuItemIndicatorDirective, LucideAngularModule],
    hostDirectives: [
        {
            directive: RdxDropdownMenuItemCheckboxDirective,
            inputs: ['checked', 'disabled'],
            outputs: ['checkedChange']
        }
    ],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <lucide-angular class="h-4 w-4" [img]="Check" rdxDropdownMenuItemIndicator />
        </span>
        <ng-content></ng-content>
    `
})
export class OriDropdownMenuCheckboxItem {
    readonly class = input<string>();

    readonly computedClass = computed(() =>
        cn(
            'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            this.class()
        )
    );
    protected readonly Check = Check;
}
