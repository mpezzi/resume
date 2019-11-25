import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Introduction, SocialMedia } from '../../interfaces';

@Component({
  selector: 'app-resume-introduction',
  templateUrl: './resume-introduction.component.html',
  styleUrls: ['./resume-introduction.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeIntroductionComponent {

  /**
   * Holds introduction.
   */
  @Input() public introduction: Introduction;

  /**
   * Track By Link.
   */
  public trackByLink(index: number, item: SocialMedia): string {

    return item.link;

  }

}
