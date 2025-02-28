import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/page.component')
    },
    {
        path: 'alert',
        loadComponent: () => import('./pages/alerts/page.component')
    },
    {
        path: 'avatar',
        loadComponent: () => import('./pages/avatars/page.component')
    },
    {
        path: 'badge',
        loadComponent: () => import('./pages/badges/page.component')
    },
    {
        path: 'button',
        loadComponent: () => import('./pages/buttons/page.component')
    },
    {
        path: 'breadcrumb',
        loadComponent: () => import('./pages/breadcrumbs/page.component')
    },
    {
        path: 'checkbox',
        loadComponent: () => import('./pages/checkbox/page.component')
    },
    {
        path: 'dialog',
        loadComponent: () => import('./pages/dialog/page.component')
    },
    {
        path: 'input',
        loadComponent: () => import('./pages/inputs/page.component')
    },
    {
        path: 'select',
        loadComponent: () => import('./pages/selects/page.component')
    },
    {
        path: 'dropdown',
        loadComponent: () => import('./pages/dropdown/page.component')
    },
    {
        path: 'popover',
        loadComponent: () => import('./pages/popover/page.component')
    },
    {
        path: 'slider',
        loadComponent: () => import('./pages/sliders/page.component')
    },
    {
        path: 'stepper',
        loadComponent: () => import('./pages/steppers/page.component')
    },
    {
        path: 'textarea',
        loadComponent: () => import('./pages/textarea/page.component')
    },
    {
        path: 'switch',
        loadComponent: () => import('./pages/switchs/page.component')
    },
    {
        path: 'notification',
        loadComponent: () => import('./pages/notification/page.component')
    },
    {
        path: 'pagination',
        loadComponent: () => import('./pages/paginations/page.component')
    },
    {
        path: 'table',
        loadComponent: () => import('./pages/tables/page.component')
    },
    {
        path: 'radio',
        loadComponent: () => import('./pages/radio/page.component')
    },

    {
        path: 'tabs',
        loadComponent: () => import('./pages/tabs/page.component')
    },
    {
        path: 'tooltip',
        loadComponent: () => import('./pages/tooltips/page.component')
    },
    {
        path: 'easings',
        loadComponent: () => import('./pages/easings/page.component')
    }
];
