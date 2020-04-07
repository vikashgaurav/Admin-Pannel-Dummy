import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCropComponent } from './admin-crop.component';

describe('AdminCropComponent', () => {
  let component: AdminCropComponent;
  let fixture: ComponentFixture<AdminCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
