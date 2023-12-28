import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const hashToken = !!localStorage.getItem('token');

  if (state.url === '/launch' && !hashToken) {
    return false;
  }

  return true;
};
