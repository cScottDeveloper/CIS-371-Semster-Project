module.exports = class Weapon {
    //Method to make sure non of the fields are blank and that there are no duplicate emails.
  static isValid(weapon, allWeapons) {

    let errors = [];

    if (!weapon.weaponType) {
      errors.push("Every weapon must have a type.");
    }

    if (!weapon.weaponName) {
      errors.push("Every weapon must have a name.");
    }

    if (!weapon.damage) {
      errors.push("Every weapon must have an amount of damage");
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
    return allWeapons.filter((currWeapon) => currWeapon.weaponName === weapon.weaponName && currWeapon.id !== weapon.id).length === 0;
  }
}