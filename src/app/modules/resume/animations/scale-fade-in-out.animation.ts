import { animate, state, style, transition, trigger } from '@angular/animations';

export const scaleFadeInOutAnimation = trigger('scaleFadeInOut', [
  state('in', style({ transform: 'scale(1, 1)', opacity: '1' })),
  transition('void => *', [
    style({ transform: 'scale(0, 0)', opacity: '0' }),
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)')
  ]),
  transition('* => void', [
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(0, 0)', opacity: '0' }))
  ])
]);
