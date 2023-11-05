import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardChartComponent } from './Dashboard-chart.component';


describe('PieChartComponent', () => {
  let component: DashboardChartComponent;
  let fixture: ComponentFixture<DashboardChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardChartComponent]
    });
    fixture = TestBed.createComponent(DashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
