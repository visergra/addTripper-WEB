import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsOutboxComponent } from './applications-outbox.component';

describe('ApplicationsOutboxComponent', () => {
  let component: ApplicationsOutboxComponent;
  let fixture: ComponentFixture<ApplicationsOutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsOutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsOutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
