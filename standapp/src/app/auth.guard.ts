import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (prompt('passcode :') == '123')
    return true;
  else
    return false;
};
