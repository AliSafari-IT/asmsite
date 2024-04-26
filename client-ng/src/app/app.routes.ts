import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

// client-ng\src\app\app.routes.ts

// navigate to home: '/' or '/home'
export const HOME_ROUTE: Route = { path: 'home', pathMatch: 'full', redirectTo: '' };
// navigate to login: '/login' and load login component only without the rest of the routes. Do not load logiin over home page
export const LOGIN_ROUTE: Route = {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
}

export const APP_ROUTES: Route[] = [LOGIN_ROUTE, HOME_ROUTE];
