import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecondComponent } from './dashboard-second.component';

describe('DashboardSecondComponent', () => {
  let component: DashboardSecondComponent;
  let fixture: ComponentFixture<DashboardSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
