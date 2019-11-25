import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Interest } from '../../interfaces';

@Component({
  selector: 'app-resume-interest',
  templateUrl: './resume-interest.component.html',
  styleUrls: ['./resume-interest.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeInterestComponent {

  /**
   * Holds interest.
   */
  @Input() public interest: Interest;

}
