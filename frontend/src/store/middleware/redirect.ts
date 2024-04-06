import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: unknown) => {
        if (typeof action === 'object' && action !== null && 'type' in action) {
          const typedAction = action as PayloadAction<string>; // Приведение типа к PayloadAction<string>
          if (typedAction.type === 'redirectToRoute') {
            browserHistory.push(typedAction.payload);
          }
        }

        return next(action);
      };
