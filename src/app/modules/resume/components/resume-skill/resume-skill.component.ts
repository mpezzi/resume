import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../interfaces';

@Component({
  selector: 'app-resume-skill',
  templateUrl: './resume-skill.component.html',
  styleUrls: ['./resume-skill.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeSkillComponent {

  /**
   * Holds skill.
   */
  @Input() public skill: Skill;

}
