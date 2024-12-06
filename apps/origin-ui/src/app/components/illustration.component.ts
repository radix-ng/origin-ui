import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-illustration',
    standalone: true,
    host: {
        class: 'pointer-events-none absolute left-1/2 -z-10 -translate-x-full'
    },
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="472"
            height="422"
            fill="none"
            aria-hidden="true"
            role="presentation"
        >
            <g filter="url(#illf-a)" opacity=".32">
                <path
                    [attr.fill]="gradientId"
                    fill-rule="evenodd"
                    d="m64-42 344 212-166 188L64-42Z"
                    clip-rule="evenodd"
                />
            </g>
            <g filter="url(#illf-c)" opacity=".32">
                <path
                    [attr.fill]="gradientId"
                    fill-rule="evenodd"
                    d="m64-42 344 212-200-67L64-42Z"
                    clip-rule="evenodd"
                />
            </g>
            <defs>
                <linearGradient id="ill-b" x1="218.5" x2="218.5" y1="-42" y2="337" gradientUnits="userSpaceOnUse">
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" stop-opacity=".64" />
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="ill-d" x1="218.5" x2="218.5" y1="-42" y2="337" gradientUnits="userSpaceOnUse">
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" stop-opacity=".64" />
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" offset="1" stop-opacity="0" />
                </linearGradient>
                <filter
                    id="illf-a"
                    width="472"
                    height="528"
                    x="0"
                    y="-106"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" />
                </filter>
                <filter
                    id="illf-c"
                    width="472"
                    height="340"
                    x="0"
                    y="-106"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" />
                </filter>
            </defs>
        </svg>
        <svg
            class="pointer-events-none absolute left-1/2 top-1/2 -z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="520"
            height="576"
            fill="none"
            aria-hidden="true"
            role="presentation"
        >
            <g filter="url(#ill2-a)" opacity=".2">
                <path
                    [attr.fill]="gradientId"
                    fill-rule="evenodd"
                    d="m88 88 344 212-166 188L88 88Z"
                    clip-rule="evenodd"
                />
            </g>
            <defs>
                <linearGradient id="ill2-b" x1="242.5" x2="242.5" y1="88" y2="467" gradientUnits="userSpaceOnUse">
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" stop-opacity=".64" />
                    <stop [attr.stop-color]="isDarkMode ? '#71717A' : '#52525B'" offset="1" stop-opacity="0" />
                </linearGradient>
                <filter
                    id="ill2-a"
                    width="520"
                    height="576"
                    x="0"
                    y="0"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_129_124" stdDeviation="44" />
                </filter>
            </defs>
        </svg>
    `
})
export class IllustrationComponent {
    isDarkMode = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const theme = localStorage.getItem('theme');
            this.isDarkMode =
                theme === 'dark' || (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }

    get gradientId(): string {
        return 'url(#ill-b)';
    }
}
