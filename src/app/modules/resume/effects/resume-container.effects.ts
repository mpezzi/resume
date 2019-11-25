import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ResumeActions, ResumeContainerActions } from '../actions';
import { Resume } from '../interfaces';

@Injectable()
export class ResumeContainerEffects {

  /**
   * Holds On Init Effect.
   */
  public onInit$ = createEffect(() => this.actions$.pipe(ofType(ResumeContainerActions.Init), delay(2000),
    switchMap(() => (
      this.http.get<Resume>(environment.resumeUrl)
    )),
    map((resume) => (
      ResumeActions.SetResume({ resume })
    )),
    catchError((err) => (
      of(ResumeActions.SetResumeError({ error: err.message }))
    )),
  ));

  /**
   * Constructor.
   */
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) { }

}
