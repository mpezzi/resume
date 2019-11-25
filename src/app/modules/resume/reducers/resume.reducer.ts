import { Action, createReducer, on } from '@ngrx/store';
import { ResumeActions } from '../actions';
import { Resume } from '../interfaces';

export interface ResumeState {
  resume: Resume;
  resumeFilterByDate: string;
  resumeError: string;
}

export const initialState: ResumeState = {
  resume: null,
  resumeFilterByDate: new Date().toISOString(),
  resumeError: null,
};

export const resumeReducer = createReducer(initialState,
  on(ResumeActions.SetResume, (state, { resume }) => ({ ...state, resume })),
  on(ResumeActions.SetResumeError, (state, { error }) => ({ ...state, resumeError: error })),
  on(ResumeActions.SetResumeFilterByDate, (state, { date }) => ({ ...state, resumeFilterByDate: date })),
);

export function reducer(state: ResumeState | undefined, action: Action) {
  return resumeReducer(state, action);
}
