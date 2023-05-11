import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VideosService } from 'src/app/Services/videos.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent {
  video: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private VS: VideosService
  ) {}

  ngOnInit() {
    const videoId = this.route.snapshot.params['id'];
    this.getVideo(videoId);
  }

  getVideo(videoId: number) {
   this.VS.getVideo(videoId).subscribe(
      (response: any) => {
        this.video = response;
      }
    );
    
  }

  updateVideo() {
        this.VS.updateVideo(this.video.id, this.video).subscribe( 
           (response: any) => {
        console.log(response);
        this.router.navigate(['/list']);
      }
    );
    }
}