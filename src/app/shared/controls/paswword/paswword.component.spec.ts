import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswwordComponent } from './paswword.component';

describe('PaswwordComponent', () => {
  let component: PaswwordComponent;
  let fixture: ComponentFixture<PaswwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaswwordComponent]
    });
    fixture = TestBed.createComponent(PaswwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
