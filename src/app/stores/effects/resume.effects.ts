import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, switchMap } from 'rxjs/operators';
import { Resume } from '../../interfaces';
import { ResumeActions } from '../actions';

/**
 * Provides Resume Effects.
 */
@Injectable()
export class ResumeEffects {

  /**
   * Constructor.
   */
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) { }

  /**
   * Handles Load Resume.
   */
  @Effect() handleLoadResume$ = this.actions$.pipe(
    ofType<ResumeActions.LoadResume>(
      ResumeActions.Types.LoadResume
    ),
    switchMap((action) => {

      return this.http.get<Resume>('/assets/data/resume.json').pipe(
        delay(4000),
        switchMap((resume) => (
          of(new ResumeActions.LoadResumeSuccess({ resume }))
        )),
        catchError((err) => (
          of(new ResumeActions.LoadResumeFailure({ err }))
        )),
      );

    })
  );

}
