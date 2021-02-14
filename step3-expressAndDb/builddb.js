const sqlite3 = require('sqlite3').verbose();

const connect = () => {
    let db = new sqlite3.Database('./mydb.sqlite', error => {
        if (error) {
            return console.log(error);
        }
        console.log("Connected!");
    });
    return db;
}

const init = (db) => {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users(id TEXT, name TEXT)', err => {
            if (err) { console.log(err)} else { console.log("Hey! Created a table!'")}
        });
    })
}

module.exports = { connect, init }