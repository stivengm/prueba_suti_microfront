import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../models/photo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(environment + `/photos`);
  }
}
