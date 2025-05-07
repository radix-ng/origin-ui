import { Component } from '@angular/core';
import { OriCropper, OriCropperArea, OriCropperDescription, OriCropperImage } from '~/registry/default/ui/cropper';

@Component({
    selector: 'demo-cropper-02',
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
                [aspectRatio]="16 / 9"
                image="https://res.cloudinary.com/dlzlfasou/image/upload/v1746526165/cropper-02_a2xwtd.jpg"
            >
                <ori-cropper-description />
                <ori-cropper-image />
                <ori-cropper-area />
            </ori-cropper>
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Cropper with aspect ratio 16:9 ∙{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://github.com/origin-space/image-cropper"
                    target="_blank"
                >
                    API
                </a>
            </p>
        </div>
    `
})
export default class Cropper02 {}
