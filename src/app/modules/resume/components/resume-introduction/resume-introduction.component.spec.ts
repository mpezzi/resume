import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeIntroductionComponent } from './resume-introduction.component';

describe('ResumeIntroductionComponent', () => {

  const createComponent = createComponentFactory(ResumeIntroductionComponent);
  const introduction = resume.introduction;

  let spectator: Spectator<ResumeIntroductionComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { introduction },
    });

  });

  it('should display introduction', () => {

    expect(spectator.query('[data-test-id="name"]'))
      .toHaveText(introduction.name);

    expect(spectator.query('[data-test-id="job_title"]'))
      .toHaveText(introduction.job_title);

    expect(spectator.query('[data-test-id="preamble"]'))
      .toHaveText(introduction.preamble);

    expect(spectator.query('[data-test-id="mail"]'))
      .toHaveAttribute('href', 'mailto:' + introduction.mail);

    expect(spectator.query('[data-test-id="mail"]'))
      .toHaveText(introduction.mail);

    spectator.queryAll('[data-test-id="social_media_link"]').forEach((el, i) => {
      expect(el).toHaveAttribute('href', introduction.social_media[i].link);
      expect(el).toHaveAttribute('title', introduction.social_media[i].name);
      expect(el).toHaveAttribute('class', 'fab ' + introduction.social_media[i].icon);
    });

  });

});
