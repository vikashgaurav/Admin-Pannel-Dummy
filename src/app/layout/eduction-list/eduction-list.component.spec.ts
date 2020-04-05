import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EductionListComponent } from './eduction-list.component';

describe('EductionListComponent', () => {
  let component: EductionListComponent;
  let fixture: ComponentFixture<EductionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EductionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
