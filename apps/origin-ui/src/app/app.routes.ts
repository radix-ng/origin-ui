import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/index.component')
    },
    {
        path: 'avatars-badges',
        loadComponent: () => import('./pages/avatars/page.component')
    },
    {
        path: 'buttons',
        loadComponent: () => import('./pages/buttons/page.component')
    },
    {
        path: 'inputs',
        loadComponent: () => import('./pages/inputs/page.component')
    },
    {
        path: 'checks-radios-switches',
        loadComponent: () => import('./pages/checks-radios-switches/page.component')
    },
    {
        path: 'selects',
        loadComponent: () => import('./pages/selects/page.component')
    },
    {
        path: 'dropdowns-popovers',
        loadComponent: () => import('./pages/dropdowns-popovers/page.component')
    },
    {
        path: 'sliders',
        loadComponent: () => import('./pages/sliders/page.component')
    },
    {
        path: 'tabs',
        loadComponent: () => import('./pages/tabs/page.component')
    },
    {
        path: 'tooltips',
        loadComponent: () => import('./pages/tooltips/page.component')
    },
    {
        path: 'easings',
        loadComponent: () => import('./pages/easings/page.component')
    }
];
