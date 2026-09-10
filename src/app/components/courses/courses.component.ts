import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { Course } from '../../models/portfolio.models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  readonly courses: Course[] = [
    { name: 'Practical Software Testing Diploma', org: 'AIM Tech', date: '06/2026' },
    { name: 'ISTQB® CTFL V4.0', org: 'ITIDA', date: '05/2026' },
    { name: 'ISTQB Foundation Level V4.0', org: 'maharatech', date: '03/2026' },
    { name: 'Master Performance Testing Using JMeter', org: 'Udemy', date: '02/2026' },
    { name: 'Cypress', org: 'QAcart', date: '11/2025' },
    { name: 'Performance Testing Certification', org: 'QAcart', date: '08/2025' },
    { name: 'Postman Automation Project', org: 'QAcart', date: '05/2024' },
  ];
}
