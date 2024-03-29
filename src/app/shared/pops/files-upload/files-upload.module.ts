import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from './files-upload.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilesUploadDirective,
    MatDialogModule,
    ImageCropperModule,
    UploadComponent,
  ],
  exports: [FilesUploadDirective],
})
export class FilesUploadModule {}
