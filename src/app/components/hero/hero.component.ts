import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroStat } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  readonly buildId = 'build #2026.09';
  readonly status = 'PASSED';
  readonly name = 'Shady Mohamed';
  readonly role = 'Software Testing Engineer';
  readonly portraitSrc = 'assets/1742333684807.jpg'; // replace with your own image path
  readonly summary =
    'ISTQB Foundation Level V4.0 certified QA engineer covering manual, API, automation and performance testing for web platforms — from test case design through defect closure, across e‑commerce, healthcare and SaaS products.';

  readonly stats: HeroStat[] = [
    { value: 4, label: 'testing roles' },
    { value: 5, label: 'products tested' },
    { value: 3, label: 'automation tools' },
    { value: 6, label: 'certifications' },
  ];
}
