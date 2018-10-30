import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resume } from '../../interfaces';
import { ResumeActions } from '../../stores/actions';
import * as fromSelectors from '../../stores/selectors';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeContainerComponent implements OnInit {

  /**
   * Holds resume.
   */
  public resume$: Observable<Resume>;

  /**
   * Holds current year.
   */
  public currentYear$: Observable<string>;

  /**
   * Holds selected year.
   */
  public selectedYear$: Observable<string>;

  /**
   * Holds years.
   */
  public years$: Observable<string[]>;

  /**
   * Constructor.
   */
  constructor(
    private store: Store<any>,
  ) { }

  /**
   * On Init.
   */
  ngOnInit() {

    this.resume$       = this.store.pipe(select(fromSelectors.selectResumeByDate));
    this.currentYear$  = this.store.pipe(select(fromSelectors.selectResumeCurrentYear));
    this.selectedYear$ = this.store.pipe(select(fromSelectors.selectResumeSelectedYear));

    this.years$        = this.currentYear$.pipe(map(this.buildYears));

  }

  /**
   * Update.
   */
  update($event: any): void {

    this.store.dispatch(
      new ResumeActions.SetDate({
        date: moment($event, 'YYYY').format(),
      })
    );

  }

  /**
   * Build years.
   */
  buildYears(year: string): string[] {

    const result = [];

    for (let i = 0; i < 6; i++) {
      result.push(`${parseInt(year, 10) - (i * 2)}`);
    }

    return result;

  }

}
