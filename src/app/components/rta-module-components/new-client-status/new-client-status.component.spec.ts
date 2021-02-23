import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientStatusComponent } from './new-client-status.component';

describe('NewClientStatusComponent', () => {
  let component: NewClientStatusComponent;
  let fixture: ComponentFixture<NewClientStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
