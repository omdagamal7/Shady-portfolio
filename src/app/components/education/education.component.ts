import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  readonly item: EducationItem = {
    degree: "Bachelor's Degree in Computer Science",
    time: '07/2020 — 09/2024',
    institute: 'Al‑Obour Higher Institute for Computer Science and Information Systems',
  };
}
