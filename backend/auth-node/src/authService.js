class AuthService {

    constructor({email, password}) {
        this.email = email
        this.password = password
    }

    getFields() {
        return {email: this.email, password: this.password}
    }
}

export default AuthService