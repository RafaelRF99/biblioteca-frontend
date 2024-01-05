import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CategoryComponent } from './pages/category/category.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
  },
  {
    path: 'launch',
    component: LaunchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
