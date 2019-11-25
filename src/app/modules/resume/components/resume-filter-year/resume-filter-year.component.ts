import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resume-filter-year',
  templateUrl: './resume-filter-year.component.html',
  styleUrls: ['./resume-filter-year.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeFilterYearComponent {

  /**
   * Holds active year.
   */
  @Input() activeYear: number;

  /**
   * Emits changeYear event.
   */
  @Output() public changeYear: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Holds year.
   */
  public year: number = new Date().getFullYear();

  /**
   * Holds count.
   */
  public count = 5;

  /**
   * Holds years.
   */
  public years: number[] = new Array(this.count).fill(0).map((_, i) => this.year - (i * 2));

}
