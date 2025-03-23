import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  timelineEvents = [
    {
      date: 'Oct 2024 - Mar 2025',
      title: 'Frontend Developer - Surpass Sports',
      description:
        'Developed reusable React components, improved mobile responsiveness, and optimized build performance using Webpack.',
    },
    {
      date: 'Dec 2020 - Jul 2023',
      title: 'Application Development Specialist - Accenture',
      description:
        'Built secure web applications with Angular, improved UI performance, and led agile sprint planning.',
    },
    {
      date: 'Jan 2020 - Dec 2020',
      title: 'Senior Software Engineer - IndexNine Technologies',
      description:
        'Developed single-page applications and enhanced UI/UX for multiple projects.',
    },
    {
      date: 'Aug 2016 - Jan 2020',
      title: 'Software Engineer - Zensar Technologies',
      description:
        'Optimized frontend performance and contributed to secure web applications for enterprise clients.',
    },
  ];
}
