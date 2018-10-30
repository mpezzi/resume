import { createSelector } from '@ngrx/store';
import * as moment from 'moment';
import { Resume } from '../../interfaces';
import * as fromReducer from '../reducers';
import { filterByDate } from '../utils';

/**
 * Provides Resume Selector.
 */
export const selectResume = createSelector(
  fromReducer.selectResumeState,
  state => state.resume
);

/**
 * Provides Resume By Date Selector.
 */
export const selectResumeByDate = createSelector(
  fromReducer.selectResumeState,
  (state) => <Resume>(state.resume ? {
    ...state.resume,
    experiences: state.resume.experiences.filter(filterByDate(state.selected_date)),
    educations: state.resume.educations.filter(filterByDate(state.selected_date)),
    skills: state.resume.skills.filter(filterByDate(state.selected_date)),
    interests: state.resume.interests.filter(filterByDate(state.selected_date)),
  } : null)
);

/**
 * Provides Resume Current Year Selector.
 */
export const selectResumeCurrentYear = createSelector(
  fromReducer.selectResumeState,
  state => moment(state.current_date).format('YYYY')
);

/**
 * Provides Resume Selected Year Selector.
 */
export const selectResumeSelectedYear = createSelector(
  fromReducer.selectResumeState,
  state => moment(state.selected_date).format('YYYY')
);
