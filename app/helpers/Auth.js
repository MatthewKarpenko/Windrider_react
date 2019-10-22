class Auth {
    constructor() {
        this.authenticated = localStorage._token ? true : false;
        this._token = localStorage._token || null;

        this.isAuthenticated();
    }

    login(email, password, cb) {
        if (this.isAuthenticated()) {
            cb();
            return;
        }

        fetch('https://windrider-server.herokuapp.com/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(res => {
                if (res.ok){
                    res.json()
                        .then(response => {
                                if (response.success) {
                                    this.authenticated = true;
                                    this._token = localStorage._token = response.data;
                                }
                                cb();
                            }
                        );
                } else {
                    throw new Error('Auth failed');
                }
            })
            .catch(e => {
                console.log(e);
                throw new Error('Auth failed');
            });
    };

    getToken() {
        return this._token;
    };

    isAuthenticated() {
        return this.authenticated
    };
}

export default new Auth();