import { Pipe, PipeTransform } from '@angular/core';
const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LOG = [
  'Bytes',
  'Kilobytes',
  'Megabytes',
  'Gigabytes',
  'Pettabytes',
  'Exabytes',
  'Zetabytes',
  'Yottabytes',
];
@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number, longForm?: boolean): string {
    const units = longForm ? FILE_SIZE_UNITS_LOG : FILE_SIZE_UNITS;
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);
    const size = sizeInBytes / Math.pow(1024, power);
    const formatedSizes = Math.round(size * 100) / 100;
    const unit = units[power];
    return size ? `${formatedSizes} ${unit}` : '0';
  }
}
