import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
    // children: authRoutes,
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./auth/components/signin/signin.component').then(
        (m) => m.SigninComponent
      ),
  },
];
