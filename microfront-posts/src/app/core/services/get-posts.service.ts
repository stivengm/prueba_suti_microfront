import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsInterface } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  url = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.url + `/posts`);
  }
}
