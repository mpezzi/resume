import { createAction, props } from '@ngrx/store';
import { Resume } from '../interfaces';

export const SetResume = createAction(
  '[Resume] Set Resume',
  props<{ resume: Resume }>(),
);

export const SetResumeError = createAction(
  '[Resume] Set Resume Error',
  props<{ error: string }>(),
);

export const SetResumeFilterByDate = createAction(
  '[Resume] Set Resume Filter By Date',
  props<{ date: string }>(),
);
