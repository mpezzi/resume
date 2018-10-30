import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Resume } from '../../interfaces';

/**
 * Provides Resume Action Types.
 */
export enum Types {
  LoadResume = '[Resume] Load Resume',
  LoadResumeSuccess = '[Resume] Load Resume Success',
  LoadResumeFailure = '[Resume] Load Resume Failure',
  SetDate = '[Resume] Set Date',
}

/**
 * Provides Load Resume.
 */
export class LoadResume implements Action {
  readonly type = Types.LoadResume;
  constructor(

  ) { }
}

/**
 * Provides Load Resume Success.
 */
export class LoadResumeSuccess implements Action {
  readonly type = Types.LoadResumeSuccess;
  constructor(
    public payload: {
      resume: Resume;
    }
  ) { }
}

/**
 * Provides Load Resume Failure.
 */
export class LoadResumeFailure implements Action {
  readonly type = Types.LoadResumeFailure;
  constructor(
    public payload: {
      err: HttpErrorResponse;
    }
  ) { }
}

/**
 * Provides Load Resume Failure.
 */
export class SetDate implements Action {
  readonly type = Types.SetDate;
  constructor(
    public payload: {
      date: string;
    }
  ) { }
}

/**
 * Provides Resume Actions.
 */
export type Actions =
  LoadResume |
  LoadResumeSuccess |
  LoadResumeFailure |
  SetDate;
