import { Component, computed, Directive, input } from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
import {
    RdxCropperCropAreaDirective,
    RdxCropperDescriptionDirective,
    RdxCropperImageComponent,
    RdxCropperRootDirective
} from '@radix-ng/primitives/cropper';

@Directive({
    selector: 'ori-cropper, [oriCropper]',
    hostDirectives: [
        {
            directive: RdxCropperRootDirective,
            inputs: [
                'image',
                'aspectRatio',
                'zoom',
                'minZoom',
                'maxZoom',
                'cropPadding',
                'zoomSensitivity',
                'keyboardStep'
            ],
            outputs: ['onCropChange', 'onZoomChange']
        }
    ],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriCropper {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn(
            'relative flex w-full cursor-move touch-none items-center justify-center overflow-hidden focus:outline-none',
            this.class()
        )
    );
}

@Component({
    selector: 'ori-cropper-image, [oriCropperImage]',
    imports: [
        RdxCropperImageComponent
    ],
    host: {
        'data-slot': 'cropper-image'
    },
    template: `
        <div [imgClass]="imgClasses()" [imgStyles]="imgStyles()" rdxCropperImage></div>
    `
})
export class OriCropperImage {
    readonly imgClass = input<string>();

    protected readonly imgClasses = computed(() =>
        cn('pointer-events-none h-full w-full object-cover', this.imgClass())
    );

    readonly imgStyles = input<string>();
}

@Directive({
    selector: 'ori-cropper-area, [oriCropperArea]',
    hostDirectives: [
        {
            directive: RdxCropperCropAreaDirective
        }
    ],
    host: {
        'data-slot': 'cropper-crop-area',
        '[class]': 'hostClasses()'
    }
})
export class OriCropperArea {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn(
            'pointer-events-none absolute border-3 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] in-[[data-slot=cropper]:focus-visible]:ring-[3px] in-[[data-slot=cropper]:focus-visible]:ring-white/50',
            this.class()
        )
    );
}

@Directive({
    selector: 'ori-cropper-description, [oriCropperDescription]',
    hostDirectives: [
        {
            directive: RdxCropperDescriptionDirective
        }
    ],
    host: {
        'data-slot': 'cropper-description',
        '[class]': 'hostClasses()'
    }
})
export class OriCropperDescription {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('sr-only', this.class()));
}
