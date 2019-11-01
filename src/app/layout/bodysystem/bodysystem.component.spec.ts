import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysystemComponent } from './bodysystem.component';

describe('BodysystemComponent', () => {
  let component: BodysystemComponent;
  let fixture: ComponentFixture<BodysystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodysystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodysystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
