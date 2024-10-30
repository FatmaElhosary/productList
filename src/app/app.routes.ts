import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
          import('./products-list/products-list.routes').then((m) => m.routes),
      },
];
