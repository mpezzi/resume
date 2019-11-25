import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as ResumeReducer from './resume.reducer';

export interface State {
  resume: ResumeReducer.ResumeState;
}

export const reducers: ActionReducerMap<State> = {
  resume: ResumeReducer.reducer,
};

export const selectResumeModule = createFeatureSelector<State>('ResumeModule');
export const selectResumeState = createSelector(selectResumeModule, s => s.resume);
