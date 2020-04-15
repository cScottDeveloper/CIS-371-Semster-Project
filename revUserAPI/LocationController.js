const DSDB = require('./DSDB');
const Location = require('./Location');

class LocationController {

    async index(req, res) {     
        res.send(await DSDB.allLocations())
    }

    async show(req, res) {
        let id = req.params.id;
        let Location = await DSDB.findLocations(id);

        if (!Location) {
            res.send("Could not find the Location with id of " + id);
        } else {
            res.send(Location);
        }
    }
    async update(req, res) {
        let newLocation = req.body;
        console.log("Proposed updateLocation: ");
        console.log(newLocation);
        let id = req.params.id;
        let location = await DSDB.findLocations(id);

        if (!location) {
            res.status(404);
            res.send("Could not find any location with id of " + id);
        } else {
            if (Location.isValid(newLocation, await DSDB.allLocations())) {
                // Indicate that the response is successful, but has no body(204).
                DSDB.updateLocation(newLocation).then(() => {
                    res.status(204);
                    res.send();
                });
            } else {
                // Send a 422 response.
                res.status(422);
                res.send({ message: newLocation.errors.join(": ") });
            }
        }
    }
}
module.exports = LocationController;