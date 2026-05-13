import { Routes } from '@angular/router';

export const APERTURA_CARTA_CREDITO_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'step-1',
    pathMatch: 'full',
  },
  {
    path: 'step-1',
    loadComponent: () =>
      import('./pages/step-1/step-1.component').then(
        (m) => m.Step1Component
      ),
    title: 'Apertura Carta de Crédito — Paso 1',
  },
];
