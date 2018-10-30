import * as moment from 'moment';
import { Resume } from '../../interfaces';
import { ResumeActions } from '../actions';

/**
 * Provides Resume State Interface.
 */
export interface ResumeState {
  current_date: string;
  selected_date: string;
  resume: Resume;
}

/**
 * Provides Resume Initial State.
 */
export const initialState: ResumeState = {
  current_date: moment().format(),
  selected_date: moment().format(),
  resume: null,
};

/**
 * Provides Resume Reducer.
 */
export function reducer(
  state: ResumeState = initialState,
  action: ResumeActions.Actions
): ResumeState {

  switch (action.type) {

    case ResumeActions.Types.SetDate: {
      return {
        ...state,
        selected_date: action.payload.date,
      };
    }

    case ResumeActions.Types.LoadResumeSuccess: {
      return {
        ...state,
        resume: action.payload.resume,
      };
    }

  }

  return state;

}
