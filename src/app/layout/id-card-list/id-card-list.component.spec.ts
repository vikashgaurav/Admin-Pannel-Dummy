import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardListComponent } from './id-card-list.component';

describe('IdCardListComponent', () => {
  let component: IdCardListComponent;
  let fixture: ComponentFixture<IdCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
