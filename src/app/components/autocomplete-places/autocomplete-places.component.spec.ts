import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePlacesComponent } from './autocomplete-places.component';

describe('AutocompletePlacesComponent', () => {
  let component: AutocompletePlacesComponent;
  let fixture: ComponentFixture<AutocompletePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
