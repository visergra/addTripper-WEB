import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGeneralComponent } from './header-general.component';

describe('HeaderGeneralComponent', () => {
  let component: HeaderGeneralComponent;
  let fixture: ComponentFixture<HeaderGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
