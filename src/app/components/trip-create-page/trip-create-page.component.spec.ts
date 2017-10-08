import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreatePageComponent } from './trip-create-page.component';

describe('TripCreatePageComponent', () => {
  let component: TripCreatePageComponent;
  let fixture: ComponentFixture<TripCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
