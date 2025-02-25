import { InjectionToken } from '@angular/core';
import { OriToggleGroupSize, OriToggleGroupVariant } from '~/registry/ui/toggle-group';

export interface OriToggleGroupContext {
    size: OriToggleGroupSize;
    variant: OriToggleGroupVariant;
}

export const ORI_TOGGLE_GROUP_CONTEXT = new InjectionToken<OriToggleGroupContext>('OriToggleGroupContext');
