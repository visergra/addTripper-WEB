import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsInboxComponent } from './applications-inbox.component';

describe('ApplicationsInboxComponent', () => {
  let component: ApplicationsInboxComponent;
  let fixture: ComponentFixture<ApplicationsInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
