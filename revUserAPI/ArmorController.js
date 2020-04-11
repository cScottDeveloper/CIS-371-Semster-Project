const DSDB = require('./DSDB');
const Armor = require('./Armor');

class ArmorController {

    async index(req, res) {     
        res.send(await DSDB.allArmor())
    }

    async show(req, res) {
        let id = req.params.id;
        let Armor = await DSDB.findArmor(id);

        if (!Armor) {
            res.send("Could not find the Armor with id of " + id);
        } else {
            res.send(Armor);
        }
    }

    async create(req, res) {
        console.log("About to create a set of armor");
        console.log(req.body);

        let newArmor = req.body;

        // Needs to be a valid not duplicate entry, if duplicate, send 422
        if (Armor.isValid(newArmor, await DSDB.allArmor())) {
            // The 'data' contains the id (primary key) of newly created armor
            DSDB.createArmor(newArmor).then(data => res.send(data));
        } else {
            // Send a 422 response.
            res.status(422);
            res.send({ message: newArmor.errors.join(": ") });
        }
    }

    async update(req, res) {
        let newArmor = req.body;
        console.log("Proposed updateArmor: ");
        console.log(newArmor);
        let id = req.params.id;
        let armor = await DSDB.findArmor(id);

        if (!armor) {
            res.status(404);
            res.send("Could not find any armor with id of " + id);
        } else {
            if (Armor.isValid(newArmor, await DSDB.allArmor())) {
                // Indicate that the response is successful, but has no body(204).
                DSDB.updateArmor(newArmor).then(() => {
                    res.status(204);
                    res.send();
                });
            } else {
                // Send a 422 response.
                res.status(422);
                res.send({ message: newArmor.errors.join(": ") });
            }
        }
    }

    async delete(req, res) {
        let id = req.params.id;
        let armor = await DSDB.findArmor(id);
        if (!armor) {
            res.status(404);
            res.send("Could not find armor with id of " + id);
        } else {
            DSDB.deleteArmor(armor).then(() => {
                res.status(204);
                res.send();
            }).catch((message) => {
                res.status(500);
                res.send("Server error: " + message);
            });
        }
    } // end deleteWeapon
}
module.exports = ArmorController;