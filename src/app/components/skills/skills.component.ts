import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { SkillGroup } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'testing',
      chips: [
        'Manual Testing',
        'Automation Testing',
        'API Testing',
        'Regression Testing',
        'UI Testing',
        'Performance Testing',
      ],
    },
    {
      title: 'automation',
      chips: ['Selenium WebDriver', 'TestNG', 'Maven', 'Cypress'],
    },
    {
      title: 'tools',
      chips: ['Postman', 'JIRA', 'GitHub', 'JMeter', 'IntelliJ', 'ClickUp'],
    },
    {
      title: 'foundations',
      chips: ['Java', 'OOP', 'Agile/Scrum'],
    },
  ];
}
