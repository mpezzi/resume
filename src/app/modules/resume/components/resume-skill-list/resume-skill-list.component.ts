import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { scaleFadeInOutAnimation } from '../../animations';
import { Skill } from '../../interfaces';

@Component({
  selector: 'app-resume-skill-list',
  templateUrl: './resume-skill-list.component.html',
  styleUrls: ['./resume-skill-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleFadeInOutAnimation],
})
export class ResumeSkillListComponent {

  /**
   * Holds skill list.
   */
  @Input() public items: Skill[];

  /**
   * Track By Uuid.
   */
  public trackByUuid(_: number, skill: Skill): string {

    return skill.uuid;

  }

}
