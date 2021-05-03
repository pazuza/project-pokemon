import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstGenComponent } from './components/first-gen/first-gen.component';
import { SecondGenComponent } from './components/second-gen/second-gen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first-gen',
    pathMatch: 'full'
  },
  {
    path: 'first-gen',
    component: FirstGenComponent,
    pathMatch: 'full',
  },
  {
    path: 'second-gen',
    component: SecondGenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
