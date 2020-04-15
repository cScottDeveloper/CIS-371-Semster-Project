module.exports = class Location {
    //Method to make sure non of the fields are blank and that there are no duplicate emails.
  static isValid(location, allLocations) {

    let errors = [];

    if (!location.locationName) {
      errors.push("Every location must have a name.");
    }

    if (!location.description) {
      errors.push("Every description must have text.");
    }

   if (!Location.isUnique(location, allLocations)) {
     errors.push("That location is already in the database.");
   }

   if (errors.length > 0) {
     location.errors = errors;
     return false;
   } else {
     return true;
   }
  }

  static isUnique(location, allLocations) {
    return allLocations.filter((currLocation) => currLocation.locationName === location.locationName && currLocation.id !== location.id).length === 0;
  }
};