import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() isAuthorized!: boolean | null;
  @Output() singOut = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}
  onSignOut(): void {
    this.singOut.emit();
  }
}
