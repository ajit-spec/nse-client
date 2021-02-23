import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentClientHistoricalComponent } from './parent-client-historical.component';

describe('ParentClientHistoricalComponent', () => {
  let component: ParentClientHistoricalComponent;
  let fixture: ComponentFixture<ParentClientHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentClientHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentClientHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
