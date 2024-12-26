import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, Input, ViewEncapsulation } from '@angular/core';

export interface Easing {
    name: string;
    points: number[];
}

export type AnimationType = 'translate' | 'scale' | 'rotate';

@Component({
    selector: 'app-animated-square',
    imports: [NgClass, NgStyle],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pointer-events-none flex w-full items-center"
            [ngClass]="{
                'justify-start': animationType === 'translate',
                'justify-center': animationType !== 'translate'
            }"
            [ngStyle]="animationType === 'translate' ? animationStyle() : null"
        >
            <div
                class="animated-square from-primary to-primary/80 shadow-primary/10 h-10 w-10 rounded-lg bg-gradient-to-tr shadow-lg"
                [ngStyle]="animationType !== 'translate' ? animationStyle() : null"
            ></div>
        </div>
    `,
    styles: [
        `
            @keyframes translateSquare {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(100px);
                }
            }
            @keyframes scaleSquare {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
            @keyframes rotateSquare {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `
    ]
})
export class AnimatedSquareComponent {
    @Input() easing!: Easing;

    @Input()
    set duration(value: number) {
        this._duration = value / 1000;
    }

    get duration(): number {
        return this._duration;
    }

    @Input() animationType!: AnimationType;

    @Input()
    set pauseDuration(value: number) {
        this._pauseDuration = value / 1000;
    }

    get pauseDuration(): number {
        return this._pauseDuration;
    }

    private _pauseDuration: number = 1;
    private _duration: number = 1;

    animationStyle = computed(() => {
        if (!this.easing?.points?.length || this.duration <= 0) return {};

        const baseStyle = {
            '--bezier-coordinates': this.easing.points.join(','),
            '--animation-duration': `${this.duration}s`,
            '--total-duration': `${this.duration + this.pauseDuration}s`
        };

        const animationName = {
            translate: 'translateSquare',
            scale: 'scaleSquare',
            rotate: 'rotateSquare'
        }[this.animationType];

        return {
            ...baseStyle,
            animationName,
            animationDuration: `${this.duration}s`,
            animationTimingFunction: `cubic-bezier(${this.easing.points.join(',')})`,
            animationIterationCount: 'infinite',
            animationFillMode: 'forwards',
            animationDelay: '0s'
        } as Record<string, string>;
    });
}
