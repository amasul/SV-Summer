import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCeilingPage } from './details-ceiling.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCeilingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCeilingPageRoutingModule {}