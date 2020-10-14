import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserAuthenticationService {
    private currentlyAuthenticatedUser: User;

    getCurrentUser(): User {
        return this.currentlyAuthenticatedUser;
    }

    setCurrentUser(newUser: User): void {
        this.currentlyAuthenticatedUser = newUser;
    }

    authenticateUserWithFb(): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(
                        {
                            name: 'Test',
                            profilePicUrl: 'testurl',
                            isAuthenticated: true
                        }
                    );
                }, 250);
            } catch (error) {
                reject(error);
            }
        });
    }

    isUserAuthenticated(): boolean {
        return this.currentlyAuthenticatedUser && this.currentlyAuthenticatedUser.isAuthenticated;
    }
}
