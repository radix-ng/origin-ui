import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { AppPageHeaderComponent } from '../../components/page-header.component';
import { AnimatedSquareComponent } from './animated-square.component';
import { defaultConfig, Easing, EasingSvgComponent } from './easing-svg.component';

@Component({
    selector: 'app-page-easings',
    imports: [AppPageHeaderComponent, OriLabel, EasingSvgComponent, AnimatedSquareComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Tailwind CSS easing classes">
                        A set of easing functions ready to copy and paste into your Tailwind CSS project.
                    </app-components-page-header>
                    <!--Easing-->
                    <div class="mb-12 space-y-6">
                        <div class="bg-background/95 top-0 z-10 py-4 backdrop-blur-lg md:sticky">
                            <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                                <div class="flex flex-col gap-2">
                                    <label oriLabel>Duration</label>
                                    <div class="flex items-center gap-4">
                                        Slider Input
                                        <span class="text-muted-foreground text-sm">ms</span>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <div class="flex flex-col gap-2">
                                        <label oriLabel>Filter</label>
                                        Select
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <label oriLabel>Animation type</label>
                                        Select
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(2n-1)]:sm:col-span-2 [&>*:last-child:nth-child(3n-1)]:lg:col-start-2 [&>*:last-child:nth-child(3n-2)]:lg:col-span-3"
                            id="grid"
                        >
                            @for (item of easings; track item) {
                                <div
                                    class="bg-muted/65 group relative flex aspect-square flex-col items-center justify-center gap-4 rounded-xl"
                                >
                                    <div class="pt-6 text-center text-sm font-medium">{{ item.name }}</div>

                                    <div class="flex w-full grow flex-col items-start justify-center px-8">
                                        <div class="mb-4 flex w-full justify-center">
                                            <app-easing-svg
                                                [easing]="item"
                                                [duration]="1"
                                                [pauseDuration]="1"
                                                [animationType]="'translate'"
                                            />
                                            <app-animated-square
                                                [easing]="item"
                                                [duration]="duration"
                                                [pauseDuration]="pauseDuration"
                                                [animationType]="'translate'"
                                            />
                                        </div>
                                    </div>
                                </div>
                            }

                            <div class="bg-muted/65 relative rounded-xl p-6">
                                <p class="mb-4">
                                    <strong class="text-foreground block text-sm font-medium">Note</strong>
                                </p>
                                <p class="text-muted-foreground text-sm leading-relaxed">
                                    We use class names with arbitrary properties like{{ ' ' }}
                                    <code class="text-foreground font-mono text-[13px]">
                                        &#91;transition-timing-function:cubic-bezier(...)&#93;
                                    </code>
                                    {{ ' ' }} instead of{{ ' ' }}
                                    <code class="text-foreground font-mono text-[13px]">
                                        ease-&#91;cubic-bezier(...)&#93;
                                    </code>
                                    {{ ' ' }} as recommended in the Tailwind CSS documentation, because the latter
                                    won&lsquo;t work with the tailwindcss-animate plugin. See{{ ' ' }}
                                    <a
                                        class="underline hover:no-underline"
                                        href="https://github.com/jamiebuilds/tailwindcss-animate/pull/46"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        this GitHub issue
                                    </a>
                                    {{ ' ' }}
                                    for technical details.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end-->
                </div>
            </div>
        </main>
    `
})
export default class PageEasingsComponent {
    easings: Easing[] = [
        {
            name: 'linear',
            points: [0, 0, 1, 1]
        },
        {
            name: 'ease',
            points: [0.25, 0.1, 0.25, 1]
        },
        {
            name: 'ease-in',
            points: [0.42, 0, 1, 1]
        },
        {
            name: 'ease-out',
            points: [0, 0, 0.58, 1]
        },
        {
            name: 'ease-in-out',
            points: [0.42, 0, 0.58, 1]
        },
        {
            name: 'easeInSine',
            points: [0.12, 0, 0.39, 0]
        },
        {
            name: 'easeOutSine',
            points: [0.61, 1, 0.88, 1]
        },
        {
            name: 'easeInOutSine',
            points: [0.37, 0, 0.63, 1]
        },
        {
            name: 'easeInQuad',
            points: [0.11, 0, 0.5, 0]
        },
        {
            name: 'easeOutQuad',
            points: [0.5, 1, 0.89, 1]
        },
        {
            name: 'easeInOutQuad',
            points: [0.45, 0, 0.55, 1]
        },
        {
            name: 'easeInCubic',
            points: [0.32, 0, 0.67, 0]
        },
        {
            name: 'easeOutCubic',
            points: [0.33, 1, 0.68, 1]
        },
        {
            name: 'easeInOutCubic',
            points: [0.65, 0, 0.35, 1]
        },
        {
            name: 'easeInQuart',
            points: [0.5, 0, 0.75, 0]
        },
        {
            name: 'easeOutQuart',
            points: [0.25, 1, 0.5, 1]
        },
        {
            name: 'easeInOutQuart',
            points: [0.76, 0, 0.24, 1]
        },
        {
            name: 'easeInQuint',
            points: [0.64, 0, 0.78, 0]
        },
        {
            name: 'easeOutQuint',
            points: [0.22, 1, 0.36, 1]
        },
        {
            name: 'easeInOutQuint',
            points: [0.83, 0, 0.17, 1]
        },
        {
            name: 'easeInExpo',
            points: [0.7, 0, 0.84, 0]
        },
        {
            name: 'easeOutExpo',
            points: [0.16, 1, 0.3, 1]
        },
        {
            name: 'easeInOutExpo',
            points: [0.87, 0, 0.13, 1]
        },
        {
            name: 'easeInCirc',
            points: [0.55, 0, 1, 0.45]
        },
        {
            name: 'easeOutCirc',
            points: [0, 0.55, 0.45, 1]
        },
        {
            name: 'easeInOutCirc',
            points: [0.85, 0, 0.15, 1]
        },
        {
            name: 'easeInBack',
            points: [0.36, 0, 0.66, -0.56]
        },
        {
            name: 'easeOutBack',
            points: [0.34, 1.56, 0.64, 1]
        },
        {
            name: 'easeInOutBack',
            points: [0.68, -0.6, 0.32, 1.6]
        }
    ];

    duration = defaultConfig.animationDuration;

    pauseDuration = defaultConfig.pauseDuration;

    get FilteredEasings() {
        return this.easings;
    }
}
