import { Routes } from '@angular/router';


export const ROUTES: Routes = [
    {
      path: '',
      loadComponent: () => import('../../component/main/main.component').then(c => c.MainComponent),
    }
  ]