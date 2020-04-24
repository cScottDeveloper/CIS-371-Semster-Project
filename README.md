# CIS-371-Semster-Project
A innovative website with an API backend and Bottstrap/ CSS used to design the frontend.

The backend API information is converted from JSON to a useable JavaScript object. The information is stored in a SQLlite database and has three different tables of information (weapons, armor, and locations). Weapons, armor, and locations act as a notetaking part of the application and the locations table contains ALL of the actual locations and their descriptions in the game. DSDB.js is where the information is created and initDB.js is how you initialize the database(this js file calls the initialize method in the DSDB.js file). You can check to see that the information was been put in the database correctly by visiting localhost:3001/weapons, localhost:3001/armor, or localhost:3001/locations. 

I also have another AJAX call that takes place when getting the information for the hints at the bottom of the page. There is a script in the index.html file for the xml file that the contains the raw hints information. 


inside of the revUserAPI folder run:
node initDB.js

to initialize the database then run:
node index.js 

open a separate bash window and inside of the react-user-blog-complete folder run:
npm start

go to localhost:3000 to view the application.

weapons, armor, and locations can be edited and added if needed
(This is an information page so user can input item if found)

the drop down menus contain links to various walk-throughs and tutorials

walk-though: contains every walk-through in order to complete the game

spells: locations of all of spells split into types

weapons: locations of weapons split into types

items: locations of all items split into types

builds: contains links to my favorite different builds for the game

hint: contains various hints that are useful for the game

extras: contains lore and funny videos 

maps: displays a list of every area in the game, if a list item is clicked it displays the map for the area

All maps are in recommended order of visiting. Green dot is for entire map. Black dots for essential locations.
Orange dots are use to indicate optional locations.
