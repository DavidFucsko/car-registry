import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserAuthenticationService } from '../user-authentication/services/user-authentication.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserAuthenticatedGuard implements CanActivate {
    constructor(private userAuthenticationService: UserAuthenticationService, public router: Router) {
    }

    canActivate(): boolean {
        if (!this.userAuthenticationService.isUserAuthenticated()) {
            this.router.navigate(['user-authentication']);
            return false;
        }
        this.router.navigate(['car-list']);
        return true;
    }
}
