import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('in', style({ height: '*', 'margin-bottom': '*', opacity: '1' })),
  transition('void => *', [
    style({ height: '0px', 'margin-bottom': '0px', opacity: '0' }),
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)')
  ]),
  transition('* => void', [
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ height: '0px', 'margin-bottom': '0px', opacity: '0' }))
  ])
]);
