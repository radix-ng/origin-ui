import { Component, input } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';
import { Input, computed, signal } from '@angular/core';
import { categories } from './config/components';

@Component({
    selector: 'ori-image-component',
    imports: [
        NgOptimizedImage
    ],
    template: `
        <img class="w-full dark:hidden" [ngSrc]="lightSrc()" [alt]="altText()" width="268" height="198" />
        <img
            class="hidden w-full dark:block"
            [ngSrc]="darkSrc()"
            [alt]="altText() + ' dark'"
            width="268"
            height="198"
        />
    `
})
export class OriImageComponent {
    private imageBasePathSignal = signal<string>('');
    private altSignal = signal<string>('');

    @Input() set imageBasePath(value: string) {
        this.imageBasePathSignal.set(value);
    }

    @Input() set alt(value: string) {
        this.altSignal.set(value);
    }

    lightSrc = computed(() => `${this.imageBasePathSignal()}.png`);
    darkSrc = computed(() => `${this.imageBasePathSignal()}-dark.png`);
    altText = computed(() => this.altSignal());
}

@Component({
    selector: 'ori-category-card',
    imports: [
        OriImageComponent
    ],
    template: `
        <div class="space-y-3 text-center">
            <a
                class="peer inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
                [href]="slug()"
                tabIndex="-1"
            >
                <ori-image-component [imageBasePath]="imageBasePath()" />
            </a>

            <div class="[&_a]:peer-hover:underline">
                <h2>
                    <a class="text-sm font-medium hover:underline" [href]="slug()">
                        {{ name() }}
                    </a>
                </h2>
                <p class="text-muted-foreground text-[13px]">{{ componentsCount() }} Components</p>
            </div>
        </div>
    `
})
export class CategoryCard {
    readonly name = input<string>();
    readonly slug = input<string>();
    readonly componentsCount = input<number>();

    protected imageBasePath = computed(() => `thumbs/${this.slug()}`);
}

@Component({
    selector: 'ori-page',
    imports: [
        CategoryCard
    ],
    template: `
        <div data-home>
            <div class="max-w-3xl max-sm:text-center">
                <h1 class="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                    Beautiful UI components built with Tailwind CSS and
                    <span class="text-purple-400">Angular</span>
                    Zoneless.
                </h1>
                <p class="text-muted-foreground text-lg">
                    A collection of copy-and-paste components for quickly build application UIs. It&lsquo;s free,
                    open-source, and ready to drop into your projects.
                </p>
                <p class="text-accent-foreground w-fit max-w-prose pt-4 text-sm text-pretty">
                    This project is not affiliated with the original
                    <a class="underline" href="https://originui.com/" rel="noreferrer">Origin UI</a>
                    .
                </p>
            </div>

            <div class="relative my-16">
                <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    @defer {
                        @for (category of categories; track category.slug) {
                            <ori-category-card
                                [slug]="category.slug"
                                [name]="category.name"
                                [componentsCount]="category.components.length"
                            />
                        }
                    }
                </div>
            </div>
        </div>
    `
})
export default class Page {
    readonly categories = categories;
}
