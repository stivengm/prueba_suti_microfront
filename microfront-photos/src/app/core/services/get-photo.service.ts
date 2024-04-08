import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {

  url = "https://jsonplaceholder.typicode.com/"

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(this.url + `/photos`);
  }
}
