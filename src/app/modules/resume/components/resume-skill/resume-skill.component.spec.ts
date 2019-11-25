import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { resume } from '../../mocks';
import { ResumeSkillComponent } from './resume-skill.component';

describe('ResumeSkillComponent', () => {

  const createComponent = createComponentFactory(ResumeSkillComponent);
  const skill = resume.skill[0];

  let spectator: Spectator<ResumeSkillComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { skill },
    });

  });

  it('should display skill', () => {

    expect(spectator.query('[data-test-id="label"]'))
      .toHaveText(skill.label);

  });

});
