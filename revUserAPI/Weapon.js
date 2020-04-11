module.exports = class Weapon {
    //Method to make sure non of the fields are blank and that there are no duplicate emails.
  static isValid(weapon, allWeapons) {

    let errors = [];

    if (!weapon.armorType) {
      errors.push("Every weapon must have a type.");
    }

    if (!weapon.armorName) {
      errors.push("Every weapon must have a name.");
    }

    if (!weapon.protection) {
      errors.push("Every weapon must have an amount of protection");
    }

   if (!Weapon.isUnique(weapon, allWeapons)) {
     errors.push("That weapon is already in the database.");
   }

   if (errors.length > 0) {
     weapon.errors = errors;
     return false;
   } else {
     return true;
   }
  }

  static isUnique(weapon, allWeapons) {
    return allWeapons.filter((currWeapon) => currWeapon.armorName === weapon.armorName && currWeapon.id !== weapon.id).length === 0;
  }
}