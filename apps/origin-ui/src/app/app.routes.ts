import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./page')
    },
    {
        path: ':category',
        loadComponent: () => import('./pages/category')
    },
    {
        path: 'easings',
        loadComponent: () => import('./pages/easings/page.component')
    }
];
