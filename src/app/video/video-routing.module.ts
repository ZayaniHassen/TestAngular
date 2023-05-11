import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideoComponent } from './create-video/create-video.component';
import { ShowVideosComponent } from './show-videos/show-videos.component';
import { EditVideoComponent } from './edit-video/edit-video.component';

const routes: Routes = [ 
  { path: 'create', component: CreateVideoComponent },
  { path: 'list', component: ShowVideosComponent },
  { path: 'editvideo/:id', component: EditVideoComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
