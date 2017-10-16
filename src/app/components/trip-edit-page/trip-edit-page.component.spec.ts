import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripEditPageComponent } from './trip-edit-page.component';

describe('TripEditPageComponent', () => {
  let component: TripEditPageComponent;
  let fixture: ComponentFixture<TripEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
