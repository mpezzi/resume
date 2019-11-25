import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { resume } from '../../mocks';
import { ResumeSelectors } from '../../selectors';
import { ResumeContainerComponent } from './resume-container.component';

describe('ResumeContainerComponent', () => {

  const date = new Date();

  const initialState = {
    ResumeModule: {
      resume: {
        resume,
        resumeError: null,
        resumeFilterByDate: date.toISOString(),
      },
    },
  };
  const createComponent = createComponentFactory({
    component: ResumeContainerComponent,
    providers: [
      provideMockStore({ initialState }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  let spectator: Spectator<ResumeContainerComponent>;

  beforeEach(() => {

    spectator = createComponent();

  });

  it('should have resume observable', () => {

    expect(spectator.component.resume$)
      .toBeObservable(cold('a', { a: resume }));

  });

  it('should have resume error observable', () => {

    expect(spectator.component.resumeError$)
      .toBeObservable(cold('a', { a: null }));

  });

  it('should have year observable', () => {

    expect(spectator.component.year$)
      .toBeObservable(cold('a', { a: date.getFullYear() }));

  });

  it('should have introduction observable', () => {

    expect(spectator.component.introduction$)
      .toBeObservable(cold('a', { a: resume.introduction }));

  });

  it('should have experience observable', () => {

    expect(spectator.component.experience$)
      .toBeObservable(cold('a', { a: ResumeSelectors.filterItemsByDate(resume.experience, date.toISOString()) }));

  });

  it('should have education observable', () => {

    expect(spectator.component.education$)
      .toBeObservable(cold('a', { a: ResumeSelectors.filterItemsByDate(resume.education, date.toISOString()) }));

  });

  it('should have skill observable', () => {

    expect(spectator.component.skill$)
      .toBeObservable(cold('a', { a: ResumeSelectors.filterItemsByDate(resume.skill, date.toISOString()) }));

  });

  it('should have interest observable', () => {

    expect(spectator.component.interest$)
      .toBeObservable(cold('a', { a: ResumeSelectors.filterItemsByDate(resume.interest, date.toISOString()) }));

  });

});
