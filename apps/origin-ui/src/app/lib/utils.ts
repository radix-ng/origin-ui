import { RegistryItem } from 'shadcn-ng/registry';
import registry from '../../registry.json';

const components = registry.items as unknown as RegistryItem[];

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
    const componentsMap = new Map(components.map((comp: any) => [comp.name, comp]));

    return names.map((name) => componentsMap.get(name)).filter((comp): comp is RegistryItem => comp !== undefined);
};
