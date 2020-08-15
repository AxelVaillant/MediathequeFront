import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLivreComponent } from './create-livre.component';

describe('CreateLivreComponent', () => {
  let component: CreateLivreComponent;
  let fixture: ComponentFixture<CreateLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
