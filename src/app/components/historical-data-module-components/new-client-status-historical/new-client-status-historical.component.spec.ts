import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientStatusHistoricalComponent } from './new-client-status-historical.component';

describe('NewClientStatusHistoricalComponent', () => {
  let component: NewClientStatusHistoricalComponent;
  let fixture: ComponentFixture<NewClientStatusHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientStatusHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientStatusHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
