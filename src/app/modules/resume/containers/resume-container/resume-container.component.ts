import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ResumeActions, ResumeContainerActions } from '../../actions';
import { blockInitialRenderAnimation, fadeInOutAnimation } from '../../animations';
import { Education, Experience, Interest, Introduction, Resume, Skill } from '../../interfaces';
import { ResumeSelectors } from '../../selectors';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.less'],
  animations: [blockInitialRenderAnimation, fadeInOutAnimation],
})
export class ResumeContainerComponent implements OnInit, OnDestroy {

  /**
   * Holds resume observable.
   */
  public resume$: Observable<Resume> = this.store.pipe(
    select(ResumeSelectors.sResume),
  );

  /**
   * Holds resume error observable.
   */
  public resumeError$: Observable<string> = this.store.pipe(
    select(ResumeSelectors.sResumeError),
  );

  /**
   * Holds year observable.
   */
  public year$: Observable<number> = this.store.pipe(
    select(ResumeSelectors.sResumeFilterByDateYear),
  );

  /**
   * Holds introduction observable.
   */
  public introduction$: Observable<Introduction> = this.store.pipe(
    select(ResumeSelectors.sResumeIntroduction),
  );

  /**
   * Holds experience observable.
   */
  public experience$: Observable<Experience[]> = this.store.pipe(
    select(ResumeSelectors.sResumeFilteredExperienceList),
  );

  /**
   * Holds education observable.
   */
  public education$: Observable<Education[]> = this.store.pipe(
    select(ResumeSelectors.sResumeFilteredEducationList),
  );

  /**
   * Holds skill observable.
   */
  public skill$: Observable<Skill[]> = this.store.pipe(
    select(ResumeSelectors.sResumeFilteredSkillList),
  );

  /**
   * Holds education observable.
   */
  public interest$: Observable<Interest[]> = this.store.pipe(
    select(ResumeSelectors.sResumeFilteredInterestList),
  );

  /**
   * Holds subscription.
   */
  public subscription: Subscription = new Subscription();

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
  public ngOnInit(): void {

    this.subscription.add(
      this.resume$.subscribe(r => r ? this.title.setTitle(`${r.introduction.name} | ${r.introduction.job_title}`) : null),
    );

    this.store.dispatch(
      ResumeContainerActions.Init(),
    );

  }

  /**
   * On Destroy.
   */
  public ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }

  /**
   * Handle Change Year.
   */
  public handleChangeYear(year: number): void {

    this.store.dispatch(
      ResumeActions.SetResumeFilterByDate({ date: new Date(year, 0, 1).toISOString() }),
    );

  }

}
