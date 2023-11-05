import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent {

  public salesStatisticChart: any;
  public balanceOverviewChart: any;
  public topProductChart: any;

  public innerLabel = {
    id: 'innerLabel',
    afterDatasetDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx } = chart;
      const meta = args.meta;
      const xCoor = meta.data[0].x;
      const yCoor = meta.data[0].y;
      const perc = "50%";
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = '32px sans-serif';
      ctx.fillText(perc, xCoor, yCoor);
      ctx.textAlign = 'center';
      ctx.font = '16px sans-serif';
      ctx.fillText("Popular Items", xCoor, yCoor + 20);
      ctx.restore();
    },
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.salesStatisticChart = new Chart("sales-stat-chart", {
      type: 'bar',

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
          'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576', '467', '576', '572', '79'],
            backgroundColor: '#3d60df',
            barThickness: 3
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541', '542', '542', '536', '327'],
            backgroundColor: '#c1ceff',
            barThickness: 3
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: false,
            grid: {
              display: false
            }
          },
          y: {
            stacked: false,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },
          title: {
            display: true,
            text: 'Sales Statistics',
            position: "top",
            font: { weight: 'bold', size: 16 }

          }
        },
        maintainAspectRatio: false,
        responsive: true
      }

    });

    this.balanceOverviewChart = new Chart("balance-overview", {
      type: 'bar',

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
          'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576', '467', '576', '572', '79'],
            backgroundColor: '#3d60df',
            barThickness: 3
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541', '542', '542', '536', '327'],
            backgroundColor: '#c1ceff',
            barThickness: 3
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            maxHeight: 30,
            maxWidth: 30
          },
          title: {
            display: true,
            text: 'Balance Overview',
            position: "top",
            font: { weight: 'bold', size: 16 }
          }
        },
        maintainAspectRatio: false,
        responsive: true

      },

    });

    this.topProductChart = new Chart("top-product", {
      type: 'doughnut',

      data: {
        labels: ['Men', 'Electronics', 'Women'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100],
          backgroundColor: [
            '#3856d0',
            '#6c84ee',
            '#89a0fb',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },
          title: {
            display: true,
            text: 'Top Products',
            position: "top",
            font: { weight: 'bold', size: 16 }

          }
        },
        cutout: 80,
        maintainAspectRatio: false,
        responsive: true

      },
      plugins: [this.innerLabel]

    });
  }

}
