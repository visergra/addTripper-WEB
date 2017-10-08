import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboxPageComponent } from './outbox-page.component';

describe('OutboxPageComponent', () => {
  let component: OutboxPageComponent;
  let fixture: ComponentFixture<OutboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
