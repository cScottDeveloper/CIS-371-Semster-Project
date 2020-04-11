// Express documentation: https://expressjs.com/en/api.html

/* Import the express npm module */
const express = require('express')
const cors = require('cors');


const WeaponController = require('./WeaponController');
const ArmorController = require('./ArmorController');

const weaponController = new WeaponController();
const armorController = new ArmorController();

/* Import the body-parser module.  (Used for parsing Post data) */
const bodyParser = require('body-parser');

/* Instantiate a server object listening on port 3001*/
const app = express()
const port = 3001

/* Parse the request body if there is POST data */
/* IMPORTANT! Notice that this is different from the expressMVC example:
   It uses json instead of urlEncoded */

//Makes sure the body information is parsed before it gets to the controller for use
app.use(bodyParser.json());

/* Use CORS.  Enable for All requests */
app.use(cors());


let makeCrudRoutes = (name, controller) => {

    // createWeapon a "route" object.
    let makeRoute = (verb, path, method) => ({ verb: verb, path: path, method: method });

    // describe the desired routes
    let routes = [
        makeRoute('get', `/${name}`, 'index'),
        makeRoute('post', `/${name}`, 'create'),
        makeRoute('get', `/${name}/:id`, 'show'),
        makeRoute('put', `/${name}/:id`, 'updateArmor'),
        makeRoute('delete', `/${name}/:id`, 'delete')
    ];

    // createWeapon the routes from the description.
    routes.forEach((route) => {
        app[route.verb](route.path, (req, res) => {
            let ret = controller[route.method](req, res);

            Promise.resolve(ret).catch((data) => {
                console.log("Unhandled Exception");
                console.log(data);
                res.status(500);
                res.send("Server Error: Unhandled Exception.");
            });
        });
    });
};
//This one line makes allWeapons the routes for the weapons
makeCrudRoutes('weapons', weaponController);
makeCrudRoutes('armor', armorController);

/* Launch the server */
app.listen(port, () => console.log(`Dark Souls easy wiki app listening on port ${port}!`))