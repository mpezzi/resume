import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { scaleFadeInOutAnimation } from '../../animations';
import { Interest } from '../../interfaces';

@Component({
  selector: 'app-resume-interest-list',
  templateUrl: './resume-interest-list.component.html',
  styleUrls: ['./resume-interest-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleFadeInOutAnimation],
})
export class ResumeInterestListComponent {

  /**
   * Holds items.
   */
  @Input() public items: Interest[];

  /**
   * Track By Uuid.
   */
  public trackByUuid(_: number, interest: Interest): string {

    return interest.uuid;

  }

}
