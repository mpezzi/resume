import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeExperienceListComponent } from './resume-experience-list.component';

describe('ResumeExperienceListComponent', () => {

  const createComponent = createComponentFactory({
    component: ResumeExperienceListComponent,
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
  });
  const items = resume.experience;

  let spectator: Spectator<ResumeExperienceListComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { items },
    });

  });

  it('should display experiences', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText('Experience');

    expect(spectator.queryAll('[data-test-id="experience"]').length)
      .toBe(items.length);

  });

});
