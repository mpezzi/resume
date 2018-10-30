import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Resume } from './interfaces';
import { ResumeActions } from './stores/actions';
import * as fromSelectors from './stores/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500),
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 })),
      ]),
    ]),
    trigger('blockInitialRenderAnimation', [
      transition(':enter', []),
    ]),
  ],
})
export class AppComponent implements OnInit {

  /**
   * Holds resume.
   */
  public resume$: Observable<Resume>;

  /**
   * Constructor.
   */
  constructor(
    private store: Store<any>,
    private title: Title,
  ) { }

  /**
   * On Init.
   */
  ngOnInit() {

    this.resume$ = this.store.pipe(select(fromSelectors.selectResume)).pipe(
      tap((resume) => resume ? this.title.setTitle(`${resume.introduction.name} | ${resume.introduction.job_title}`) : null),
    );

    this.activate();

  }

  /**
   * Activate.
   */
  activate() {

    this.store.dispatch(
      new ResumeActions.LoadResume()
    );

  }

}
