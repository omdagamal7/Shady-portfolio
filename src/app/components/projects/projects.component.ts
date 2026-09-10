import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'gosharry',
      type: 'SaaS e‑commerce builder',
      description:
        'Tested core storefront and admin workflows across multiple user roles, executed API testing with Postman, and built Selenium regression scripts with defects tracked in Jira.',
    },
    {
      name: 'card4games',
      type: 'Voucher e‑commerce platform',
      description:
        'Performed end‑to‑end testing for purchase, wallet and catalog flows, ran performance testing with JMeter, and maintained a Cypress automation suite for critical regression scenarios.',
    },
    {
      name: 'Nexus',
      type: 'Voucher e‑commerce platform',
      description:
        'Verified catalog and checkout workflows through structured manual cycles and validated API responses with Postman and Swagger, documenting defects to closure in Jira.',
    },
    {
      name: 'medicaspac',
      type: 'Healthcare social networking platform',
      description:
        'Validated key user journeys across networking and content features, created clear test cases, and performed API testing with Swagger while tracking issues in ClickUp.',
    },
    {
      name: 'justacodes',
      type: 'Multi‑tenant reseller platform',
      description:
        'Tested multi‑tenant wallet, order and affiliate/referral logic, logging and verifying defects in Jira and running regression checks with Postman and Cypress.',
    },
  ];
}
