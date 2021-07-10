import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeEducationComponent } from './resume-education.component';

describe('ResumeEducationComponent', () => {

  const createComponent = createComponentFactory(ResumeEducationComponent);
  const education = resume.education[0];

  let spectator: Spectator<ResumeEducationComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { education },
    });

  });

  it('should display education', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText(education.course);

    expect(spectator.query('[data-test-id="lead"]'))
      .toHaveText(`${education.school} / ${education.duration}`);

    expect(spectator.query('[data-test-id="description"]'))
      .toHaveText(education.description);

  });

});
