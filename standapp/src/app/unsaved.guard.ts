import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if (prompt('really want to close ?') == 'y')
    return true;
  else
    return false;
};
