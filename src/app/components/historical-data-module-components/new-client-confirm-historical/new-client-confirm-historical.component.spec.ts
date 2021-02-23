import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientConfirmHistoricalComponent } from './new-client-confirm-historical.component';

describe('NewClientConfirmHistoricalComponent', () => {
  let component: NewClientConfirmHistoricalComponent;
  let fixture: ComponentFixture<NewClientConfirmHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientConfirmHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientConfirmHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
