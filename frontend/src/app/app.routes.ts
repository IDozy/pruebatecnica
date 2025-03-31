import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { DetailComponent } from './features/detail/detail.component';

export const routes: Routes = [
  { path: '', component: ListComponent }, 
  { path: 'detail/:id', component: DetailComponent }, 
];
