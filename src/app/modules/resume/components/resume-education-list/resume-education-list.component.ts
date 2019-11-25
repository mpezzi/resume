import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { slideInOutAnimation } from '../../animations';
import { Education } from '../../interfaces';

@Component({
  selector: 'app-resume-education-list',
  templateUrl: './resume-education-list.component.html',
  styleUrls: ['./resume-education-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInOutAnimation],
})
export class ResumeEducationListComponent {

  /**
   * Holds items.
   */
  @Input() public items: Education[];

  /**
   * Track By Uuid.
   */
  public trackByUuid(_: number, education: Education): string {

    return education.uuid;

  }

}
