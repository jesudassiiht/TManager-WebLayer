import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';
import { ListTaskComponentComponent } from './list-task-component/list-task-component.component';

export const routes: Routes = [
  { 'path': '', redirectTo: 'projects/0', pathMatch: 'full' },
  { 'path': 'tasks/:id', component: CreateTaskComponentComponent },
  { 'path': 'view-tasks', component: ListTaskComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
