module.exports = class Armor {
    //Method to make sure non of the fields are blank and that there are no duplicate emails.
  static isValid(armor, allArmor) {

    let errors = [];

    if (!armor.armorType) {
      errors.push("Every armor must have a type.");
    }

    if (!armor.armorName) {
      errors.push("Every armor must have a name.");
    }

    if (!armor.protection) {
      errors.push("Every armor must have an amount of protection");
    }

   if (!Armor.isUnique(armor, allArmor)) {
     errors.push("That armor is already in the database.");
   }

   if (errors.length > 0) {
     armor.errors = errors;
     return false;
   } else {
     return true;
   }
  }

  static isUnique(armor, allArmor) {
    return allArmor.filter((currArmor) => currArmor.armorName === armor.armorName && currArmor.id !== armor.id).length === 0;
  }
};