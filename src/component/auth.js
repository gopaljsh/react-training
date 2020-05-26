class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        let email = localStorage.getItem('email');
        if (email) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        cb();
    }

    logout(cb) {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();