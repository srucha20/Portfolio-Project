import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  public doughnutChartLabels: string[] = [
    'Angular',
    'React',
    'JavaScript',
    'TypeScript',
  ];

  public doughnutChartData: any = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [90, 80, 85, 70], // Skill levels
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  public doughnutChartType: string = 'doughnut';
}
