import { inject } from '@angular/core';
import { Route, Routes, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataStoreService } from '../services/data-store-service';
import { ROUTES } from '../constrant';

export const authGuard: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const dataStore: DataStoreService = inject(DataStoreService);

    if (!dataStore.name.value) {
        router.navigate([ROUTES.WELCOME]);
        return false;
    }

    return true;
}

export const authWrapper = (route: Route): Route => {
    if (route.path === ROUTES.WELCOME) return route;
    return {
        ...route,
        canActivate: [authGuard]
    };
};

export const toAuthRoutes = (routes: Routes) => routes.map(r => authWrapper(r));
