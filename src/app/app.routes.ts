import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import('./pages/signals/signals.component').then(
            (m) => m.SignalsComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'signals',
      },
    ],
  },
];
