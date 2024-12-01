import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/index.component')
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/page.component')
  },
  {
    path: 'inputs',
    loadComponent: () => import('./pages/inputs/page.component')
  },
];
