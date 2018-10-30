import { ActionReducerMap } from '@ngrx/store';
import * as fromResumeReducer from './resume.reducer';

/**
 * Provides State Interface.
 */
export interface State {
  resume: fromResumeReducer.ResumeState;
}

/**
 * Provides Reducers.
 */
export const reducers: ActionReducerMap<State> = {
  resume: fromResumeReducer.reducer,
};

/**
 * Provides Resume State Selector.
 */
export const selectResumeState = (state: State) => state.resume;
