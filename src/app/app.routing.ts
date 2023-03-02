import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './elements/error/error.component';
import { SecurityComponent } from './modules/security/security.component';

const routes: Routes = [
  // { path:  'chart/:id',
  //  component:  ChartCoinComponent
  // },
  {
    path: 'security', 
    loadChildren: () => import('./modules/security/security.module').then((el)=>el.SecurityModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/coin/coin.module').then((el)=>el.CoinModule),
  },
  { 
    path: '**', 
    component: ErrorComponent 
  },
  
];

export const AppRoutes = RouterModule.forRoot(routes);
