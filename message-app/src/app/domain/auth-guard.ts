import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = sessionStorage.getItem('token') ?? "";
  const logged = "" !== token;

  if (route.title == "login") {
    if (logged) {
      return router.createUrlTree([""]);
    } else {
      return true;
    }
  }

  if (logged) {
    return true;
  }

  return router.createUrlTree(["login"]);
};
