import { Component, OnInit } from '@angular/core';
import { Chart, ScriptableContext } from 'chart.js/auto';

@Component({
  selector: 'app-spend-graphic-card',
  templateUrl: './spend-graphic-card.component.html',
  styleUrls: ['./spend-graphic-card.component.css'],
})
export class SpendGraphicCardComponent implements OnInit {
  total_actual_month_spend = 0;
  data = [
    {
      day: 'mon',
      amount: 17.45,
    },
    {
      day: 'tue',
      amount: 34.91,
    },
    {
      day: 'wed',
      amount: 52.36,
    },
    {
      day: 'thu',
      amount: 31.07,
    },
    {
      day: 'fri',
      amount: 23.39,
    },
    {
      day: 'sat',
      amount: 43.28,
    },
    {
      day: 'sun',
      amount: 25.48,
    },
  ];

  ngOnInit() {

    this.total_actual_month_spend =  this.data.reduce((acc, curr) => acc + curr.amount, 0);
    const labels = this.data.map((x) => x.day);
    const data = this.data.map((x) => x.amount);

    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Spend',
            data: data,
            backgroundColor: (ctx: ScriptableContext<'bar'>) =>
              this.getColor(ctx),
            borderColor: (ctx: ScriptableContext<'bar'>) => this.getColor(ctx),
            borderWidth: 1,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      },
    });
  }
  getColor(ctx: ScriptableContext<"bar">) {
    const dayOfWeek = new Date().getDay();
    if ((ctx.dataIndex +1) === dayOfWeek) {
      return 'hsl(186, 34%, 60%)'; // current day
    } else {
      return 'hsl(10, 79%, 65%)'; // other day
    }
  }
}
