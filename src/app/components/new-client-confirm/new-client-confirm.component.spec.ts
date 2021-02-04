import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientConfirmComponent } from './new-client-confirm.component';

describe('NewClientConfirmComponent', () => {
  let component: NewClientConfirmComponent;
  let fixture: ComponentFixture<NewClientConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
