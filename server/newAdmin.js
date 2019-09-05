const database = require('./database');
const config = require('./config');

const bcrypt = require('bcrypt');
const readline = require('readline');
const Admin = require('./models/admin');


database()
    .then(info => {
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('What do you think of Node.js? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
            let dataArray = answer.split('|');
            bcrypt.hash(dataArray[3], 10, (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    Admin.create({
                        name: dataArray[0],
                        surname: dataArray[1],
                        email: dataArray[2],
                        password: hash
                    }).then(admin => {
                        console.log(admin);
                    }).catch(err => {
                        console.log(err);
                    });
                }
            });
            rl.close();
        });
    })
    .catch(() => {
        console.error('Unable to connect to database');
        process.exit(1);
    });