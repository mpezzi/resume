import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeExperienceComponent } from './resume-experience.component';

describe('ResumeExperienceComponent', () => {

  const createComponent = createComponentFactory(ResumeExperienceComponent);
  const experience = resume.experience[0];

  let spectator: Spectator<ResumeExperienceComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { experience },
    });

  });

  it('should display experience', () => {

    expect(spectator.query('[data-test-id="title"]'))
      .toHaveText(experience.job);

    expect(spectator.query('[data-test-id="lead"]'))
      .toHaveText(`${experience.company} / ${experience.duration}`);

    expect(spectator.query('[data-test-id="description"]'))
      .toHaveText(experience.description);

    spectator.queryAll('[data-test-id="highlight"]').forEach((el, i) => {
      expect(el).toHaveText(experience.highlights[i]);
    });

  });

});
