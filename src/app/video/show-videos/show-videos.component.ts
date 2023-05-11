import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/Services/videos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-videos',
  templateUrl: './show-videos.component.html',
  styleUrls: ['./show-videos.component.css']
})
export class ShowVideosComponent implements OnInit {
  
    constructor(private VS:VideosService,private route: Router) { }
  
    ngOnInit(): void {
      this.getVideos();

    }
    videos: any = [];   
    getVideos() { 
      this.VS.getVideos().subscribe((response: any) => {
        this.videos = response;
      });
    }
  
    
}
