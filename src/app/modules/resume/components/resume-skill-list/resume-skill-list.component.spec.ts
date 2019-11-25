import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeSkillListComponent } from './resume-skill-list.component';

describe('ResumeSkillListComponent', () => {

  const createComponent = createComponentFactory({
    component: ResumeSkillListComponent,
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
  });
  const items = resume.skill;

  let spectator: Spectator<ResumeSkillListComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { items },
    });

  });

  it('should display skills', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText('Skills');

    expect(spectator.queryAll('[data-test-id="skill"]').length)
      .toBe(items.length);

  });

});
