import { resume } from '../mocks';
import { ResumeState } from '../reducers/resume.reducer';
import * as ResumeSelectors from './resume.selectors';

describe('ResumeSelectors', () => {

  const date = new Date();

  const state: ResumeState = {
    resume,
    resumeError: 'Test Error',
    resumeFilterByDate: date.toISOString(),
  };

  it('should select resume', () => {
    expect(ResumeSelectors.sResume.projector(state))
      .toBe(state.resume);
  });

  it('should select resume error', () => {
    expect(ResumeSelectors.sResumeError.projector(state))
      .toBe(state.resumeError);
  });

  it('should select resume filter by date', () => {
    expect(ResumeSelectors.sResumeFilterByDate.projector(state))
      .toBe(state.resumeFilterByDate);
  });

  it('should select resume filter by date year', () => {
    expect(ResumeSelectors.sResumeFilterByDateYear.projector(state.resumeFilterByDate))
      .toBe(date.getFullYear());
  });

  it('should select resume introduction', () => {
    expect(ResumeSelectors.sResumeIntroduction.projector(state.resume))
      .toBe(state.resume.introduction);
  });

  it('should select resume experience list', () => {
    expect(ResumeSelectors.sResumeExperienceList.projector(state.resume))
      .toBe(state.resume.experience);
  });

  it('should select resume education list', () => {
    expect(ResumeSelectors.sResumeEducationList.projector(state.resume))
      .toBe(state.resume.education);
  });

  it('should select resume skill list', () => {
    expect(ResumeSelectors.sResumeSkillList.projector(state.resume))
      .toBe(state.resume.skill);
  });

  it('should select resume interest list', () => {
    expect(ResumeSelectors.sResumeInterestList.projector(state.resume))
      .toBe(state.resume.interest);
  });

  it('should select resume filtered experience list', () => {
    expect(ResumeSelectors.sResumeFilteredExperienceList.projector(state.resume.experience, state.resumeFilterByDate))
      .toEqual(ResumeSelectors.filterItemsByDate(state.resume.experience, state.resumeFilterByDate));
  });

  it('should select resume filtered education list', () => {
    expect(ResumeSelectors.sResumeFilteredEducationList.projector(state.resume.education, state.resumeFilterByDate))
      .toEqual(ResumeSelectors.filterItemsByDate(state.resume.education, state.resumeFilterByDate));
  });

  it('should select resume filtered skill list', () => {
    expect(ResumeSelectors.sResumeFilteredSkillList.projector(state.resume.skill, state.resumeFilterByDate))
      .toEqual(ResumeSelectors.filterItemsByDate(state.resume.skill, state.resumeFilterByDate));
  });

  it('should select resume filtered interest list', () => {
    expect(ResumeSelectors.sResumeFilteredInterestList.projector(state.resume.interest, state.resumeFilterByDate))
      .toEqual(ResumeSelectors.filterItemsByDate(state.resume.interest, state.resumeFilterByDate));
  });

});
