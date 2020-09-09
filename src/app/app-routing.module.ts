import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { FormsComponent } from './forms/forms.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', component: FormsComponent },
  { path: 'form', component: FormListComponent },
  { path: 'edit', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
