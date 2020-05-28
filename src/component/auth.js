class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.isAuthenticated();
        cb();
    }

    logout(cb) {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        let email = localStorage.getItem('email');
        if (email != undefined && email != '') {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return this.authenticated;
    }
}

export default new Auth();