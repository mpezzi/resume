import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('in', style({ opacity: '1' })),
  transition('void => *', [
    style({ opacity: '0' }),
    animate('750ms cubic-bezier(0.23, 1, 0.32, 1)')
  ]),
  transition('* => void', [
    animate('750ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: '0' }))
  ])
]);
