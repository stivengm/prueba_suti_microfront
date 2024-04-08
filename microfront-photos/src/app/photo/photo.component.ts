import { Component, ViewChild } from '@angular/core';
import { GetPhotoService } from '../core/services/get-photo.service';
import { PhotoInterface } from '../core/models/photo.interface';
import { Store, select } from '@ngrx/store';
import { getItems, loadedItems } from '../state/actions/photo.actions';
import { AppState } from '../state/app.state';
import { selectItemsPhotoFeature, selectListItemsPhoto } from '../state/selectors/photo.selectos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  photos: PhotoInterface[] = [];
  photos$: Observable<any> = new Observable();
  photosSlice: PhotoInterface[] = [];
  page = 1;
  recordsView = 25;
  recordsInitial = 1;

  titleEdit = '';

  editRecord: PhotoInterface = {
    albumId: 0,
    id: 0,
    thumbnailUrl: '',
    title: '',
    url: ''
  };

  closeResult = "";

  constructor(private photoService: GetPhotoService, private store: Store<AppState>) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe((response) => {

      this.store.dispatch(loadedItems({
        items: response
      }));

      this.photos = response;
      this.photosSlice = this.photos.slice(0, this.recordsView);
    });

    this.photos$ = this.store.select(selectItemsPhotoFeature);
  }

  editPhoto(photo: PhotoInterface) {

    this.titleEdit = photo.title;
    this.editRecord = photo;

    var modal = document.getElementById('modal');
    modal!.style.display = 'flex';

  }

  saveRecord(id: number) {
    var index = id-1;
    Object.freeze(this.photos);

    const arrCopy = [...this.photos];

    Object.freeze(this.editRecord);

    var newRecord: PhotoInterface = {
      albumId: this.photos[index].albumId,
      id: id,
      thumbnailUrl: this.photos[index].thumbnailUrl,
      title: this.titleEdit,
      url: this.photos[index].url
    };

    const newEditRecord = {...newRecord};

    arrCopy[index] = newEditRecord;

    this.photos = arrCopy;

    this.photosSlice = this.photos.slice(this.recordsInitial, this.recordsView);

    var modal = document.getElementById('modal');
    modal!.style.display = 'none';
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

  deleteItem(id: number) {
    const resultado = this.photos.filter(m => m.id != id);
    this.photos = resultado;
    this.photosSlice = this.photos;
    this.photosSlice = this.photos.slice(this.recordsInitial, this.recordsView);
  }

}
