import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VideoRoutingModule } from './video-routing.module';
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ShowVideosComponent } from './show-videos/show-videos.component';


@NgModule({
  declarations: [
    CreateVideoComponent,
    EditVideoComponent,
    ShowVideosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
