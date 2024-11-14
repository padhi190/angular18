import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../app/auth/types/registerRequest.interface';

export const register = createAction(
  '[Auth] Register',
  props<RegisterRequestInterface>()
);
