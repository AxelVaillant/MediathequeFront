import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotifComponent } from './list-notif.component';

describe('ListNotifComponent', () => {
  let component: ListNotifComponent;
  let fixture: ComponentFixture<ListNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
