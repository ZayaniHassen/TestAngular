import { Component } from '@angular/core';
import { VideosService } from 'src/app/Services/videos.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent {
  video: any = {};
  constructor(private VS:VideosService) {}
  
  
  addVideo() {
    this.VS.createVideo(this.video).subscribe((response: any) => {
      console.log(response);
    }
    );
}
}