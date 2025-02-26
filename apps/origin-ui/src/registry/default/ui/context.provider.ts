import { forwardRef, Provider } from '@angular/core';
import { ORI_TOGGLE_GROUP_CONTEXT, OriToggleGroupContext } from '~/registry/default/ui/context-token';
import { OriToggleGroupComponent } from '~/registry/default/ui/toggle-group';

export const ORI_TOGGLE_GROUP_CONTEXT_PROVIDER: Provider = {
    provide: ORI_TOGGLE_GROUP_CONTEXT,
    useFactory: (self: OriToggleGroupComponent): OriToggleGroupContext => {
        if (!self) {
            throw new Error('OriToggleGroupComponent is undefined in factory!');
        }
        return {
            size: self.size(),
            variant: self.variant()
        };
    },
    deps: [forwardRef(() => OriToggleGroupComponent)]
};
