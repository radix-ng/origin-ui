import {Component, Input, computed, signal, numberAttribute} from '@angular/core';
import { input } from '@angular/core';

export interface Easing {
    points: number[];
}

export type AnimationType = 'translate' | 'scale' | 'rotate';

export const defaultConfig = {
    width: 300,
    height: 300,
    padding: 20,
    plotSize: 260,
    animationDuration: 3000,
    pauseDuration: 2000
};

@Component({
    selector: 'app-easing-svg',
    standalone: true,
    template: `
    <svg
      [attr.width]="config().width"
      [attr.height]="config().height"
      [attr.viewBox]="'0 0 ' + config().width + ' ' + config().height"
      [style]="svgStyle()"
      class="w-full"
    >
      <!-- Grid -->
      <rect
        [attr.x]="config().padding"
        [attr.y]="config().padding"
        [attr.width]="config().plotSize"
        [attr.height]="config().plotSize"
        class="fill-none stroke-muted-foreground/20"
        strokeWidth="1"
      ></rect>

      <!-- Diagonal line -->
      <line
        [attr.x1]="config().padding"
        [attr.y1]="config().height - config().padding"
        [attr.x2]="config().width - config().padding"
        [attr.y2]="config().padding"
        class="stroke-muted-foreground/20"
        strokeWidth="1"
      ></line>

      <!-- Bezier curve -->
      <path
        [attr.d]="bezierPath()"
        fill="none"
        class="stroke-muted-foreground"
        strokeWidth="2"
      ></path>

      <!-- Start point -->
      <circle
        [attr.cx]="config().padding"
        [attr.cy]="config().height - config().padding"
        r="4"
        class="fill-muted-foreground"
      ></circle>

      <!-- End point -->
      <circle
        [attr.cx]="config().width - config().padding"
        [attr.cy]="config().padding"
        r="4"
        class="fill-muted-foreground"
      ></circle>

      <!-- Animated circle -->
      <g
        class="animated-circle"
        [attr.key]="key()"
        [style]="animationStyle()"
      >
        <circle
          [attr.cx]="config().padding"
          [attr.cy]="config().height - config().padding"
          r="4"
          class="fill-primary"
          [style]="circleAnimationStyle()"
        ></circle>
      </g>
    </svg>
  `,
    styles: [
        `
      @keyframes moveCircleHorizontally {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(var(--plot-size));
        }
      }
      @keyframes moveCircleVertically {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(calc(-1 * var(--plot-size)));
        }
      }
      .animated-circle circle {
        animation-fill-mode: forwards;
      }
    `,
    ],
})
export class EasingSvgComponent {
    easing = input.required<Easing>();
    config = input.required<typeof defaultConfig>();
    duration = input.required<number>();
    animationType = input.required<AnimationType>();
    pauseDuration = input.required<number>();

    key = computed(() => `${this.duration()}-${this.pauseDuration()}-${this.animationType()}`);

    svgStyle = computed(() => ({
        '--plot-size': `${this.config().plotSize}px`,
    }));

    animationStyle = computed(() => {
        if (!this.easing().points.length || this.duration() <= 0) return {};

        return {
            '--bezier-coordinates': this.easing().points.join(','),
            '--animation-duration': `${this.duration()}s`,
            '--total-duration': `${this.duration() + this.pauseDuration()}s`,
            animationName: 'moveCircleVertically',
            animationDuration: `${this.duration()}s`,
            animationTimingFunction: `cubic-bezier(${this.easing().points.join(',')})`,
            animationIterationCount: '1',
            animationFillMode: 'forwards',
            animationDelay: '0s',
        } as Record<string, string>;
    });

    circleAnimationStyle = computed(() => ({
        animationName: 'moveCircleHorizontally',
        animationDuration: `${this.duration()}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: '1',
        animationFillMode: 'forwards',
        animationDelay: '0s',
    }));

    bezierPath = computed(() => {
        const c = this.config();
        const e = this.easing();
        const h = c.height - c.padding;

        return `M${c.padding},${h} C${c.padding + e.points[0] * c.plotSize},${
            h - e.points[1] * c.plotSize
        } ${c.padding + e.points[2] * c.plotSize},${h - e.points[3] * c.plotSize} ${
            c.padding + c.plotSize
        },${h - c.plotSize}`;
    });
}
