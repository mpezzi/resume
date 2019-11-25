import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from '../../interfaces';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeExperienceComponent {

  /**
   * Holds experience.
   */
  @Input() public experience: Experience;

}
