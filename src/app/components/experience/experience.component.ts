import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { ExperienceCase } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly cases: ExperienceCase[] = [
    {
      status: 'RUNNING',
      current: true,
      role: 'Software Testing Engineer',
      org: 'Azzrk',
      time: '07/2026 — Present · Full time, On-site',
      description:
        'Executed manual testing across web application features and end‑to‑end user workflows, validated API responses with Postman, and automated key regression scenarios in Selenium while tracking defects in Jira.',
    },
    {
      status: 'RUNNING',
      current: true,
      role: 'Software Testing Engineer',
      org: 'Nasr Soft',
      time: '07/2025 — Present · Remote',
      description:
        'Conducted manual testing across core web features for consistent user behavior, ran performance testing with JMeter and API testing with Postman/Swagger, and built Cypress regression suites with defect tracking in Jira.',
    },
    {
      status: 'PASSED',
      role: 'Software Testing Engineer',
      org: 'Medicaspace',
      time: '04/2026 — 07/2026 · Remote',
      description:
        'Verified web application functionality through structured manual test cycles in an Agile environment, validated API endpoints with Postman and Hoppscotch, and documented defects in ClickUp.',
    },
    {
      status: 'PASSED',
      role: 'Software Testing Trainee',
      org: 'Waretech',
      time: '05/2025 — 08/2025',
      description:
        'Practiced manual testing techniques including test case design and execution, gained hands‑on experience in API testing with Postman, and learned defect reporting and tracking in Jira.',
    },
  ];
}
