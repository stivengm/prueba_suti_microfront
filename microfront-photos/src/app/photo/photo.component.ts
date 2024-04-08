import { Component } from '@angular/core';
import { GetPhotoService } from '../core/services/get-photo.service';
import { PhotoInterface } from '../core/models/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  photos: PhotoInterface[] = [];
  photosSlice: PhotoInterface[] = [];
  page = 1;
  recordsView = 25;
  recordsInitial = 1;

  constructor(private photoService: GetPhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe((response) => {
      console.log(response);
      this.photos = response;
      this.photosSlice = this.photos.slice(0, this.recordsView);
    })
  }

  onNext() {
    if (this.recordsView < 5000) {
      this.page++;
      const getLimitRecords = this.recordsView + 25;
      this.recordsInitial = this.recordsView;
      this.photosSlice = this.photos.slice(this.recordsView, getLimitRecords);
      this.recordsView = getLimitRecords;
    }
  }

  onBack() {
    if (this.recordsView > 25) {
      debugger;
      this.page--;
      this.recordsView = this.recordsView - 25;
      this.recordsInitial = this.recordsView - 25;
      this.photosSlice = this.photos.slice(this.recordsInitial, this.recordsView);
      if (this.recordsInitial == 0) this.recordsInitial = 1;
    }
  }

}
