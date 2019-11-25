import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  name: string;
}

export const reducers: ActionReducerMap<State> = {
  name: null,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
