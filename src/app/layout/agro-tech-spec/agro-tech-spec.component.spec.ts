import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroTechSpecComponent } from './agro-tech-spec.component';

describe('AgroTechSpecComponent', () => {
  let component: AgroTechSpecComponent;
  let fixture: ComponentFixture<AgroTechSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroTechSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroTechSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
