import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';

import { FormsModule } from '@angular/forms'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  component: PhotoComponent }
];


@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [PhotoComponent],
})
export class PhotoModule { }
