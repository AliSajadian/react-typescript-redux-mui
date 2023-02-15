import { ThunkAction } from 'redux-thunk';
import { RootState, RootActions } from '../index';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
