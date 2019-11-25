import { createSelector } from '@ngrx/store';
import { selectResumeState } from '../reducers';
import { filterByDate } from '../utils';

export const filterItemsByDate = (items: any[], date: string): any[] => (
  date ? items.filter(filterByDate(date)) : items
);

export const sResume = createSelector(selectResumeState, s => s.resume);
export const sResumeError = createSelector(selectResumeState, s => s.resumeError);
export const sResumeFilterByDate = createSelector(selectResumeState, s => s.resumeFilterByDate);
export const sResumeFilterByDateYear = createSelector(sResumeFilterByDate, s => new Date(s).getFullYear());

export const sResumeIntroduction = createSelector(sResume, s => s.introduction);
export const sResumeExperienceList = createSelector(sResume, s => s.experience);
export const sResumeEducationList = createSelector(sResume, s => s.education);
export const sResumeSkillList = createSelector(sResume, s => s.skill);
export const sResumeInterestList = createSelector(sResume, s => s.interest);

export const sResumeFilteredExperienceList = createSelector(sResumeExperienceList, sResumeFilterByDate, filterItemsByDate);
export const sResumeFilteredEducationList = createSelector(sResumeEducationList, sResumeFilterByDate, filterItemsByDate);
export const sResumeFilteredSkillList = createSelector(sResumeSkillList, sResumeFilterByDate, filterItemsByDate);
export const sResumeFilteredInterestList = createSelector(sResumeInterestList, sResumeFilterByDate, filterItemsByDate);
