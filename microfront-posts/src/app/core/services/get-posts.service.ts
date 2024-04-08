import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsInterface } from '../models/posts.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(environment.apiPosts + `/posts`);
  }
}
