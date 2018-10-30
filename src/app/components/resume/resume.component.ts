import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from '../../interfaces';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      state('in', style({ 'height': '*', 'margin-bottom': '*', 'opacity': '1' })),
      transition('void => *', [
        style({ 'height': '0px', 'margin-bottom': '0px', 'opacity': '0' }),
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)')
      ]),
      transition('* => void', [
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ 'height': '0px', 'margin-bottom': '0px', 'opacity': '0' }))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({ 'transform': 'scale(1, 1)', 'opacity': '1' })),
      transition('void => *', [
        style({ 'transform': 'scale(0, 0)', 'opacity': '0' }),
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)')
      ]),
      transition('* => void', [
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ 'transform': 'scale(0, 0)', 'opacity': '0' }))
      ])
    ]),
    trigger('blockInitialRenderAnimation', [
      transition(':enter', []),
    ]),
  ]
})
export class ResumeComponent {

  /**
   * Holds resume.
   */
  @Input() resume: Resume;

  /**
   * Holds years.
   */
  @Input() years: string[];

  /**
   * Holds current year.
   */
  @Input() currentYear: string;

  /**
   * Holds selected year.
   */
  @Input() selectedYear: string;

  /**
   * Emits update event.
   */
  @Output() update = new EventEmitter();

  /**
   * Track by uuid.
   */
  trackByUuid(index: number, i: any): any {

    return i.uuid;

  }

  /**
   * Track by year.
   */
  trackByYear(index: number, i: any): any {

    return i;

  }

}
