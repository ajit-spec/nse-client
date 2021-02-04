import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentClientComponent } from './parent-client.component';

describe('ParentClientComponent', () => {
  let component: ParentClientComponent;
  let fixture: ComponentFixture<ParentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
