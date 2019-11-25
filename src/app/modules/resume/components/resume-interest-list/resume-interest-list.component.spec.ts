import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeInterestListComponent } from './resume-interest-list.component';

describe('ResumeInterestListComponent', () => {

  const createComponent = createComponentFactory({
    component: ResumeInterestListComponent,
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
  });
  const items = resume.interest;

  let spectator: Spectator<ResumeInterestListComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { items },
    });

  });

  it('should display interests', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText('Interests');

    expect(spectator.queryAll('[data-test-id="interest"]').length)
      .toBe(items.length);

  });

});
