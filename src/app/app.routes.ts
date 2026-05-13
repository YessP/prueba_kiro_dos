import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'apertura-carta-credito',
    loadChildren: () =>
      import('./features/apertura-carta-credito/apertura-carta-credito.routes').then(
        (m) => m.APERTURA_CARTA_CREDITO_ROUTES
      ),
  },
  {
    path: '',
    redirectTo: 'apertura-carta-credito',
    pathMatch: 'full',
  },
];
