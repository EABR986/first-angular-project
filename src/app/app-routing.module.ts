import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EabrComponent } from './pages/eabr/eabr.component';

const routes: Routes = [
  { path: 'eabr', component: EabrComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
