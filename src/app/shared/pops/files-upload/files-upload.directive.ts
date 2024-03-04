import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilesUploadComponent } from './files-upload.component';

@Directive({
  selector: '[appFilesUpload]',
  standalone: true,
})
export class FilesUploadDirective {
  @Input() multiple!: boolean;
  @Input() corp!: boolean;
  // @Input() accept!: string;
  // @Input() disabled!: boolean;
  // @Input() required!: boolean;
  // @Input() name!: string;
  // @Input() id!: string;
  @Output() changed = new EventEmitter<string | string[]>();
  constructor(private dialog: MatDialog) {}
  @HostListener('click', ['event']) onClick() {
    this.onDialog();
  }

  private onDialog(): void {
    const dialogRef = this.dialog.open(FilesUploadComponent, {
      width: '550px',
      height: '500px',
      data: {
        multiple: this.multiple,
        corp: this.corp,
        // accept: this.accept,
        // disabled: this.disabled,
        // required: this.required,
        // name: this.name,
        // id: this.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.changed.emit(result || null);
    });
  }
}
