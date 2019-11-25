import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeInterestComponent } from './resume-interest.component';

describe('ResumeInterestComponent', () => {

  const createComponent = createComponentFactory(ResumeInterestComponent);
  const interest = resume.interest[0];

  let spectator: Spectator<ResumeInterestComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { interest },
    });

  });

  it('should display interest', () => {

    expect(spectator.query('[data-test-id="label"]'))
      .toHaveText(interest.label);

  });

});
