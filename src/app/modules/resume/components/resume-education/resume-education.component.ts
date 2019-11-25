import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Education } from '../../interfaces';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeEducationComponent {

  /**
   * Holds education.
   */
  @Input() public education: Education;

}
