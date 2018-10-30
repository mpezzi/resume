import { Routes } from '@angular/router';
import * as fromContainers from './containers';

/**
 * Provides App Routes.
 */
export const routes: Routes = [
  {
    path: '',
    component: fromContainers.ResumeContainerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
