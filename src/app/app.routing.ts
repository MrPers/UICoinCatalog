import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './elements/error/error.component';
import { TableComponent } from './pages/table/table.component';
import { ChartComponent } from './pages/chart/chart.component';

const routes: Routes = [
  { path:  'chart/:id',
   component:  ChartComponent
  },
  {
    path: 'table', 
    component: TableComponent,
  },
  { 
    path: '',
    component: TableComponent,
  },
  { 
    path: '**', 
    component: ErrorComponent 
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
