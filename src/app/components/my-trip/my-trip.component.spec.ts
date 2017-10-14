import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripComponent } from './my-trip.component';

describe('MyTripComponent', () => {
  let component: MyTripComponent;
  let fixture: ComponentFixture<MyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
