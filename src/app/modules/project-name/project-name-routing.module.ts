import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectNameComponent } from './project-name/project-name.component';
import { MathtypeComponent } from './mathtype/mathtype.component';

const routes: Routes = [
  { path: '', redirectTo: 'math-type', pathMatch: 'full' },
  { path: 'project-name', component: ProjectNameComponent },
  { path: 'math-type', component: MathtypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectNameRoutingModule { }
