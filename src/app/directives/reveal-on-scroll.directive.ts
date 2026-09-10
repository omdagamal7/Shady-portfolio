import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

/**
 * Replaces the original inline <script> IntersectionObserver logic.
 * Usage: add [appRevealOnScroll] to any element that used
 * `.section-head`, `.case`, `.skill-group`, `.project`, `.course`
 * and toggle the `.in` class the same way the original CSS expects.
 */
@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
