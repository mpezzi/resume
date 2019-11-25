import { ResumeActions } from '../actions';
import { resume } from '../mocks';
import { ResumeState, reducer } from './resume.reducer';

describe('ResumeReducer', () => {

  const state: ResumeState = {
    resume: null,
    resumeFilterByDate: null,
    resumeError: null,
  };

  it('should set resume', () => {

    const action = ResumeActions.SetResume({ resume });

    expect(reducer(state, action)).toEqual(
      jasmine.objectContaining({ resume: action.resume }),
    );

  });

  it('should set resume error', () => {

    const action = ResumeActions.SetResumeError({ error: 'Test Error' });

    expect(reducer(state, action)).toEqual(
      jasmine.objectContaining({ resumeError: action.error }),
    );

  });

  it('should set resume filter by date', () => {

    const action = ResumeActions.SetResumeFilterByDate({ date: new Date().toISOString() });

    expect(reducer(state, action)).toEqual(
      jasmine.objectContaining({ resumeFilterByDate: action.date }),
    );

  });

});
