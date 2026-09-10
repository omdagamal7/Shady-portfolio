import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly year = 2026;
  readonly name = 'Shady Mohamed';

  readonly links: ContactLink[] = [
    { icon: '✉', label: 'shadyamieen@gmail.com', href: 'mailto:shadyamieen@gmail.com' },
    { icon: '☎', label: '+20 102 438 3162', href: 'tel:+201024383162' },
    {
      icon: '',
      label: 'in/shady-mohamed',
      href: 'https://linkedin.com/in/shady-mohamed',
      external: true,
    },
    {
      icon: '',
      label: 'gh/shady-55',
      href: 'https://github.com/shady-55',
      external: true,
    },
  ];

  readonly location = '📍 Cairo, Egypt';
}
