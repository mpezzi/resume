import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Resume, SocialMedia } from '../../interfaces';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {

  /**
   * Holds resume.
   */
  @Input() resume: Resume;

  /**
   * Track by link.
   */
  trackByLink(index: number, item: SocialMedia): string {

    return item.link;

  }

}
