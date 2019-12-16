// import { resolve } from "dns";

class Auth {
    constructor() {
        this._token = localStorage._token || null;
        this.authenticated = this.token ? true : false;
    }

    login(email, password, cb) {
        if (this.authenticated) {
            cb();
        } else {
            fetch('https://windrider-server.herokuapp.com/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
                .then(res => {
                    res.json().then(response => {
                        console.log(response)
                            if (response.success) {
                                this.authenticated = true;
                                this._token = localStorage._token = response.data;
                                cb();
                            }
                        }
                    )
                })
                .catch((e) => {
                    console.log(e)
                    throw new Error('Auth failed');
                });
        }
    }

    logOut() {
        this.authenticated = false;
        this.token = '';
    }

    get token() {
        return this._token;
    }

    set token(token) {
        this._token = token;
    }

    // async isAuthenticated() {
    //     let response = await fetch('https://windrider-server.herokuapp.com/api/admin/check-auth', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'access_token': this.token
    //         }
    //     });

    //     this.authenticated = await response.json();
    // }
}

let auth = new Auth();


export default auth;