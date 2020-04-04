import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomistListComponent } from './agronomist-list.component';

describe('AgronomistListComponent', () => {
  let component: AgronomistListComponent;
  let fixture: ComponentFixture<AgronomistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronomistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
