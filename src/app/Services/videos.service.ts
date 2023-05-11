import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) {}

createVideo(videoData: any) {
  return this.http.post('http://localhost:3000/videos', videoData);
}
updateVideo(videoId: number, videoData: any) {
  return this.http.put(`http://localhost:3000/videos/${videoId}`, videoData);
}
getVideos() {
  return this.http.get('http://localhost:3000/videos');
}
getVideo(videoId: number) {
  return this.http.get(`http://localhost:3000/videos/${videoId}`);
}

}