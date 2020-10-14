export class User {
    name: string;
    profilePicUrl: string;
    isAuthenticated: boolean;

    constructor() {
        this.name = '';
        this.profilePicUrl = '';
        this.isAuthenticated = false;
    }
}
