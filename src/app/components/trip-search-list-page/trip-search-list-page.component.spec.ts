import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSearchListPageComponent } from './trip-search-list-page.component';

describe('TripSearchListPageComponent', () => {
  let component: TripSearchListPageComponent;
  let fixture: ComponentFixture<TripSearchListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSearchListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSearchListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
