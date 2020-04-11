var sqlite3 = require('sqlite3').verbose();

class DSDB {

    static initialize() {
        this.db.serialize(() => {
            this.db.run('CREATE TABLE Weapons (id INTEGER PRIMARY KEY, weaponType TEXT NOT NULL, weaponName TEXT NOT NULL, damage TEXT NOT NULL);');
            this.db.run('CREATE TABLE Armor (id INTEGER PRIMARY KEY, armorType TEXT NOT NULL, armorName TEXT NOT NULL, protection TEXT NOT NULL);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Dagger", "Parrying dagger", 12);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Dagger", "Harpe",  13);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Dagger", "Brigand Twin Daggers", 11);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Sword", "Thorn-Sword", 15);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Sword", "Flaming Vengence", 18);');
            this.db.run('INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("Two-handed Sword", "Zweihander", 25);');
            this.db.run('INSERT INTO Armor (armorType, armorName, protection) VALUES ("medium", "Leather Suit", 300);');
            this.db.run('INSERT INTO Armor (armorType, armorName, protection) VALUES ("light", "Chainmail", 266);');
            this.db.run('INSERT INTO Armor (armorType, armorName, protection) VALUES ("heavy", "Golden Knight Mail", 500);');
            this.db.run('INSERT INTO Armor (armorType, armorName, protection) VALUES ("heavy", "Paladin\'s Metal", 505);');
        });
    }

    static allWeapons() {
        return new Promise((resolve, reject) => {
            this.db.allWeapons('SELECT * FROM Armor', (err, rows) => {
                resolve(rows);
            });
        });
    }

    static allArmor() {
        return new Promise((resolve, reject) => {
            this.db.allArmor('SELECT * FROM Armor', (err, rows) => {
                resolve(rows);
            });
        });
    }

    static findWeapons(id) {
        return new Promise((resolve, reject) => {
            this.db.allWeapons(`SELECT * FROM Weapons WHERE (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    console.log("resolving");
                    resolve(rows[0]);
                } else {
                    console.log("rejecting");
                    reject(`Weapon with Id ${id} not found`);
                }
            });
        });
    }

    static findArmor(id) {
        return new Promise((resolve, reject) => {
            this.db.allWeapons(`SELECT * FROM Armor WHERE (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    console.log("resolving");
                    resolve(rows[0]);
                } else {
                    console.log("rejecting");
                    reject(`Armor with Id ${id} not found`);
                }
            });
        });
    }

    static createWeapon(weapon) {
        let sql = `INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("${weapon.armorType}", "${weapon.armorName}", "${weapon.protection}");`;
        return new Promise((resolve, reject) => {
            console.log('The sql: ');
            console.log(sql);
            //Have to use "function key word here
            this.db.run(sql, function (err, rows) {
                console.log("This: ");
                console.log(this);
                if (err) {
                    console.log('Error while inserting new weapon...');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...weapon })
                }
            });
        })
    }

    static createArmor(armor) {
        let sql = `INSERT INTO Armor (armorType, armorName, protection) VALUES ("${armor.armorType}", "${armor.armorName}", "${armor.protection}");`;
        return new Promise((resolve, reject) => {
            console.log('The sql: ');
            console.log(sql);
            //Have to use "function key word here
            this.db.run(sql, function (err, rows) {
                console.log("This: ");
                console.log(this);
                if (err) {
                    console.log('Error while inserting new armor...');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...armor })
                }
            });
        })
    }

    static updateWeapon(weapon) {
        let sql = `UPDATE Weapons SET weaponType="${weapon.armorType}", weaponName="${weapon.armorName}", damage="${weapon.protection}" WHERE id="${weapon.id}"`;
        return new Promise((resolve, reject) => {
            this.db.run(sql, function (err, rows) {
                if (err) {
                    console.log('Update Error');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ success: true });
                }
            });
        });
    }

    static updateArmor(armor) {
        let sql = `UPDATE Armor SET armorType="${armor.armorType}", armorName="${armor.armorName}", protection="${armor.protection}" WHERE id="${armor.id}"`;
        return new Promise((resolve, reject) => {
            this.db.run(sql, function (err, rows) {
                if (err) {
                    console.log('Update Error');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ success: true });
                }
            });
        });
    }

    static deleteWeapon(weapon) {
        let sql = `DELETE FROM Weapons WHERE id="${weapon.id}"`;
        return new Promise((resolve, reject) => {
            this.db.run(sql, function (err, rows) {
                if (err) {
                    console.log('Delete Error');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ success: true });
                }
            });
        });
    } // end deleteWeapon

    static deleteArmor(armor) {
        let sql = `DELETE FROM Armor WHERE id="${armor.id}"`;
        return new Promise((resolve, reject) => {
            this.db.run(sql, function (err, rows) {
                if (err) {
                    console.log('Delete Error');
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ success: true });
                }
            });
        });
    } // end deleteArmor

} // end DSDB

DSDB.db = new sqlite3.Database('blog.sqlite');

module.exports = DSDB;