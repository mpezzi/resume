import { transition, trigger } from '@angular/animations';

export const blockInitialRenderAnimation = trigger('blockInitialRenderAnimation', [
  transition(':enter', []),
]);
