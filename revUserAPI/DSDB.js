var sqlite3 = require('sqlite3').verbose();

class DSDB {

    static initialize() {
        this.db.serialize(() => {
            this.db.run('CREATE TABLE Weapons (id INTEGER PRIMARY KEY, weaponType TEXT NOT NULL, weaponName TEXT NOT NULL, damage TEXT NOT NULL);');
            this.db.run('CREATE TABLE Armor (id INTEGER PRIMARY KEY, armorType TEXT NOT NULL, armorName TEXT NOT NULL, protection TEXT NOT NULL);');
            this.db.run('CREATE TABLE Locations (id INTEGER PRIMARY KEY, locationName TEXT NOT NULL, description TEXT NOT NULL);');
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
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Firelink Shrine", "Firelink Shrine ' +
                'is the player\'s first destination in Dark Souls and Dark Souls Remastered. This ancient and crumbling ' +
                'shrine is used as a gathering hub and safe haven for many trainers, merchants and other story related characters. ' +
                'This central bonfire will be visited often, since it is also a crossroads for many regions and shortcuts.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("North Undead Asylum", "The Northern Undead ' +
                'Asylum is the starting area of Dark Souls and Dark Souls Remastered. Your character will be locked in a prison ' +
                'and will find its way out whilst reading helpful Orange Guidance Soapstone messages that teach you about the ' +
                'controls of the game. ");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Undead Parish", "The Undead Parish is a location in Dark Souls and Dark Souls Remastered. Here you will find the first Bell of Awakening. This area can be reached via Undead Burg initially or via Firelink Shrine (once you unlock the elevator) and it\'s also the gateway to Darkroot Garden and Sen\'s Fortress.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Depths", "The Depths is an area in Dark Souls and Dark Souls Remastered, accessed from Lower Undead Burg. The door leading down to it is unlocked by the Key to Depths, which is obtained by beating the Capra Demon. It serves as the gateway to Blighttown once you defeat the area\'s boss.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Blighttown", "Blighttown is a Location in Dark Souls and Dark Souls Remastered that can be accessed through the Depths or the Valley of Drakes. It serves as a gateway to Quelaag\'s Domain, which then leads on to the Demon Ruins. You can also progress to The Great Hollow and subsequently Ash Lake from here, although you don\'t need to access either of these areas as part of the main quest.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Quelaag\'s Domain", "Quelaag\'s Domain is an area in Dark Souls and Dark Souls Remastered. Accessed via Blighttown swamp and guarded by boulder-throwing Giants, it acts as a boss arena - Quelaag - and contains the second Bell of Awakening. Once you defeat the boss it also serves as the gateway to the Demon Ruins.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Sen\'s Fortress", "Sen\'s Fortress is an area in Dark Souls and Dark Souls Remastered. This dark castle is guarded by monstrous reptilian guards, boulder-throwing giants and numerous traps such as massive swinging axes, boulders and pitfalls. It serves as the gateway to Anor Londo.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Anor Londo", "Anor Londo is an area in Dark Souls and Dark Souls Remastered. With its perpetually setting sun and gorgeous architecture, the city of Anor Londo will take your breath away upon your first sight of it, but don\'t be fooled by its apparent tranquility. Reachable via a small orange ring that appears after defeating the Iron Golem on top of Sen\'s Fortress, it\'s the home of Lordran\'s remaining deities and the Lordvessel- an essential artifact for completing the main quest.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Darkroot Garden", "Darkroot Garden is an area in Dark Souls and Dark Souls Remastered. Usually accessed early in the game by heading downstairs from Blacksmith Andre in the Undead Parish. It is also possible to enter from Darkroot Basin, but this requires heading through very dangerous territory for a low-level character.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Darkroot Basin", "Darkroot Basin is a Location in Dark Souls and Dark Souls Remastered. A sub-level of Darkroot Garden, it is not essential to explore it for the main quest. It\'s accessed by going down a steep path near the entrance of the Garden, just past the first Ent. There is no official boss in the area, but there are still a couple of tough enemies to defeat in the Hydra and Golden Crystal Golem.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("New Londo Ruins", "New Londo Ruins is a location in Dark Souls and Dark Souls Remastered. The flooded ruins of this city of the tainted are located directly under Firelink Shrine and they\'re plagued by cursed beings that require a special weapon or a transient curse in order to hit them. There is no bonfire in the area and it serves as the gateway to The Abyss, once you lower the water level.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("The Duke\'s Archives", "The Duke\'s Archives is a location in Dark Souls and Dark Souls Remastered. This area is only reachable from Anor Londo after placing the Lordvessel. It\'s named after its boss, Seath the Scaleless, who was awarded a Duke-dom by Lord Gwyn for the role he played in the war against the Dragons. The area comprises a giant library, a prison tower and a small garden area that leads to the Crystal Cave.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Crystal Cave", "Crystal Cave is a location in Dark Souls and Dark Souls Remastered. This area is where you are able to take revenge on Seath the Scaleless and contains numerous invisible paths that you must find by watching the falling crystal snow hit the invisible ground. It is accessed through The Duke\'s Archives.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Demon Ruins", "Demon Ruins is a Location in Dark Souls and Dark Souls Remastered. These lava filled ruins are accessed via a passage beneath the bell tower in Quelaag\'s Domain, and so it is available quite early on in the game. However, a Golden Fog Gate blocks the way near the end and hence you cannot access all the area until you place the Lordvessel. The enemies within are quite tough (two of which were previously bosses, earlier in the game) and it also contains three separate boss fights. It serves as the gateway to Lost Izalith, once you beat all its challenges.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Lost Izalith", "Lost Izalith is a Location in Dark Souls and Dark Souls Remastered. This area is normally first found after defeating the Centipede Demon in the Demon Ruins but can also be accessed early through a shortcut before the Demon Firesage fog gate, but only if you are a level 2 Chaos Servant (which costs 30 Humanity). It\'s the home of the Bed of Chaos - one of the Lord Souls required to finish the game.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("The Catacombs", "The Catacombs is a Location in Dark Souls and Dark Souls Remastered. The dark and dank Catacombs lie in tunnel in the graveyard of Firelink Shrine. The area is populated by living Skeletons that are being kept alive by the Undead Mages that also reside here. It\'s here you\'ll acquire the ability to kindle bonfires further than previously possible from the area\'s boss: Pinwheel. It then leads on to Tomb of the Giants.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Tomb of Giants", "The Tomb of the Giants is a Location in Dark Souls and Dark Souls Remastered. A very dark Tomb located below The Catacombs full of giant skeletons. To make it easier to navigate it recommend that you follow our walthrough by exploring Anor Londo and Lost Izalith before coming here. And obtaining the Skull Lantern, Sunlight Maggot (Lost Izalith), or the spell cast light so that it is possible to see, as the area is full of treacherous falls. ");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("The Valley of Drakes", "The Valley of Drakes is a Location in Dark Souls and Dark Souls Remastered. This small area is populated by infant dragons and acts as a hub to numerous other areas of Lordran. It has no boss in the traditional sense, no bonfire or any item you need to collect as part of the main quest and is hence non-essential; although you will inevitably end up visiting it at least once, likely during trips between Blighttown. It can be accessed right from the start of the game via New Londo Ruins as long as you picked the Master Key as your starting gift.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("The Abyss", "The Abyss is a location in Dark Souls and Dark Souls Remastered. A dark and formless void, in an already dark and sad world. It\'s accessed via the New Londo Ruins after you lower the water level. It serves as the arena for the Four Kings   boss battle and, once they\'re defeated, is also the home to Darkstalker Kaathe, the leader of the Darkwraith Convenant.");');
            this.db.run('INSERT INTO Locations (locationName, description) VALUES ("Kiln of The First Flame", "Kiln of the First Flame is a Location in Dark Souls and Dark Souls Remastered. Once you\'ve obtained the souls necessary to power the Lordvessel in the Firelink Altar, you may begin the end of your first journey.");');
        });
    }

    static allWeapons() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM Weapons', (err, rows) => {
                resolve(rows);
            });
        });
    }

    static allArmor() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM Armor', (err, rows) => {
                resolve(rows);
            });
        });
    }

    static allLocations() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM Locations', (err, rows) => {
                resolve(rows);
            });
        });
    }

    static findWeapons(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Weapons WHERE (id == ${id})`, (err, rows) => {
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
            this.db.all(`SELECT * FROM Armor WHERE (id == ${id})`, (err, rows) => {
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

    static findLocations(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Locations WHERE (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    console.log("resolving");
                    resolve(rows[0]);
                } else {
                    console.log("rejecting");
                    reject(`Location with Id ${id} not found`);
                }
            });
        });
    }

    static createWeapon(weapon) {
        let sql = `INSERT INTO Weapons (weaponType, weaponName, damage) VALUES ("${weapon.weaponType}", "${weapon.weaponName}", "${weapon.damage}");`;
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
        let sql = `UPDATE Weapons SET weaponType="${weapon.weaponType}", weaponName="${weapon.weaponName}", damage="${weapon.damage}" WHERE id="${weapon.id}"`;
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

    static updateLocation(location) {
        let sql = `UPDATE Locations SET locationName="${location.locationName}", description="${location.description}" WHERE id="${location.id}"`;
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