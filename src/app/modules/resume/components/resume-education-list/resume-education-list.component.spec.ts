import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeEducationListComponent } from './resume-education-list.component';

describe('ResumeEducationListComponent', () => {

  const createComponent = createComponentFactory({
    component: ResumeEducationListComponent,
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
  });
  const items = resume.education;

  let spectator: Spectator<ResumeEducationListComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { items },
    });

  });

  it('should display educations', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText('Education');

    expect(spectator.queryAll('[data-test-id="education"]').length)
      .toBe(items.length);

  });

});
