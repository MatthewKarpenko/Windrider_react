class Auth {
    constructor() {
        console.log(document.cookie);
        this.authenticated = false;
    }

    login(email, password, cb) {
        if (this.isAuthenticated()) {
            cb();
            return;
        }
        fetch('http://localhost:3000/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(res => {
                if (res.ok){
                    res.json()
                } else {
                    throw new Error('Auth failed');
                }
            })
            .then(response => {
                console.log(response);
                this.authenticated = true;
                cb();
            })
            .catch(e => {
                console.log(e.message);
            });
    };

    isAuthenticated() {
        return this.authenticated
    };
}

export default new Auth();