import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/store/store.page').then((m) => m.StorePage)
  }
];
