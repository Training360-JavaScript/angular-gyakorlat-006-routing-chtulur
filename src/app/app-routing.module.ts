import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './page/event-list/event-list.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  {
    path: '**',
    component: EventListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
