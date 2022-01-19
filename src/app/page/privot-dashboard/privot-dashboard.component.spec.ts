import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivotDashboardComponent } from './privot-dashboard.component';

describe('PrivotDashboardComponent', () => {
  let component: PrivotDashboardComponent;
  let fixture: ComponentFixture<PrivotDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivotDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivotDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
