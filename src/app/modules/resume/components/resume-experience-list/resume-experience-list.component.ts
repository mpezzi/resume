import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { slideInOutAnimation } from '../../animations';
import { Experience } from '../../interfaces';

@Component({
  selector: 'app-resume-experience-list',
  templateUrl: './resume-experience-list.component.html',
  styleUrls: ['./resume-experience-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInOutAnimation],
})
export class ResumeExperienceListComponent {

  /**
   * Holds experience list.
   */
  @Input() items: Experience[];

  /**
   * Track By Uuid.
   */
  public trackByUuid(_: number, experience: Experience): string {

    return experience.uuid;

  }

}
