'use client';

import { useEffect } from 'react';

export function useEmpowaYouthScrollAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.ey-observe'));
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ey-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function useEmpowaYouthImpactCounters() {
  useEffect(() => {
    const cells = Array.from(document.querySelectorAll<HTMLElement>('.ey-anim-stat-cell'));
    if (cells.length === 0) return undefined;

    const formatValue = (value: number) => value.toLocaleString('en-US');
    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const animateCounter = (cell: HTMLElement) => {
      const numberElement = cell.querySelector<HTMLElement>('.ey-impact-number');
      if (!numberElement || cell.dataset.counted === 'true') return;

      cell.dataset.counted = 'true';
      const target = Number(cell.dataset.value || '0');
      const suffix = cell.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();

      const step = (timestamp: number) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(target * easeOutCubic(progress));
        numberElement.textContent = `${formatValue(current)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          numberElement.textContent = `${formatValue(target)}${suffix}`;
        }
      };

      numberElement.textContent = `0${suffix}`;
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cell = entry.target as HTMLElement;
            cell.classList.add('ey-anim-stat-visible');
            animateCounter(cell);
            observer.unobserve(cell);
          }
        });
      },
      { threshold: 0.3 }
    );

    cells.forEach((cell) => observer.observe(cell));
    return () => observer.disconnect();
  }, []);
}

export function useEmpowaYouthBentoCardAnimations() {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('.ey-impact-bento-grid');
    if (!grid) return undefined;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.ey-impact-bento-card'));
    if (cards.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card) => card.classList.add('ey-visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);
}
