import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientHistoricalComponent } from './new-client-historical.component';

describe('NewClientHistoricalComponent', () => {
  let component: NewClientHistoricalComponent;
  let fixture: ComponentFixture<NewClientHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
