const DSDB = require('./DSDB');
const Weapon = require('./Weapon')

class WeaponController {

    async index(req, res) {     
        res.send(await DSDB.allWeapons())
    }

    async show(req, res) {
        let id = req.params.id;
        let weapon = await DSDB.findWeapons(id);

        if (!weapon) {
            res.send("Could not findWeapons a weapon with id of " + id);
        } else {
            res.send(weapon);
        }
    }

    async create(req, res) {
        console.log("About to create weapon");
        console.log(req.body);

        let newWeapon = req.body;

        // Needs to be a valid not duplicate entry, if duplicate, send 422
        if (Weapon.isValid(newWeapon, await DSDB.allWeapons())) {
            // The 'data' contains the id (primary key) of newly created weapon
            DSDB.createWeapon(newWeapon).then(data => res.send(data));
        } else {
            // Send a 422 response.
            res.status(422);
            res.send({ message: newWeapon.errors.join(": ") });
        }
    }

    async update(req, res) {
        let newWeapon = req.body;
        console.log("Proposed updateWeapon: ");
        console.log(newWeapon);
        let id = req.params.id;
        let weapons = await DSDB.findWeapons(id);

        if (!weapons) {
            res.status(404);
            res.send("Could not findWeapons any weapons with id of " + id);
        } else {
            if (Weapon.isValid(newWeapon, await DSDB.allWeapons())) {
                // Indicate that the response is successful, but has no body(204).
                DSDB.updateWeapon(newWeapon).then(() => {
                    res.status(204);
                    res.send();
                });
            } else {
                // Send a 422 response.
                res.status(422);
                res.send({ message: newWeapon.errors.join(": ") });
            }
        }
    }

    async delete(req, res) {
        let id = req.params.id;
        let weapon = await DSDB.findWeapons(id);
        if (!weapon) {
            res.status(404);
            res.send("Could not findWeapons a weapon with id of " + id);
        } else {
            DSDB.deleteWeapon(weapon).then(() => {
                res.status(204);
                res.send();
            }).catch((message) => {
                res.status(500);
                res.send("Server error: " + message);
            });
        }
    } // end deleteWeapon
}
module.exports = WeaponController;