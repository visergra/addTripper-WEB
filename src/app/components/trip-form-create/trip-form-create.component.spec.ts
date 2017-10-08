import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormCreateComponent } from './trip-form-create.component';

describe('TripFormCreateComponent', () => {
  let component: TripFormCreateComponent;
  let fixture: ComponentFixture<TripFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
