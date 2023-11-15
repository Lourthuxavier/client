import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectNameRoutingModule } from './project-name-routing.module';
import { ProjectNameComponent } from './project-name/project-name.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MathtypeComponent } from './mathtype/mathtype.component';
@NgModule({
  declarations: [ProjectNameComponent, MathtypeComponent],
  imports: [CommonModule, SharedModule, ProjectNameRoutingModule, CKEditorModule],
})

export class ProjectNameModule { }
