import { Component } from '@angular/core';
import { OriCropper, OriCropperArea, OriCropperDescription, OriCropperImage } from '~/registry/default/ui/cropper';

@Component({
    selector: 'demo-cropper-01',
    imports: [
        OriCropper,
        OriCropperImage,
        OriCropperArea,
        OriCropperDescription
    ],
    template: `
        <div class="flex flex-col items-center gap-2">
            <ori-cropper
                class="h-80"
                image="https://res.cloudinary.com/dlzlfasou/image/upload/v1746526166/cropper-01_bcxaic.jpg"
            >
                <ori-cropper-description />
                <ori-cropper-image />
                <ori-cropper-area />
            </ori-cropper>
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Basic cropper ∙{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://sb-primitives.radix-ng.com/?path=/docs/primitives-cropper--docs"
                    target="_blank"
                >
                    API
                </a>
            </p>
        </div>
    `
})
export default class Cropper01 {}
