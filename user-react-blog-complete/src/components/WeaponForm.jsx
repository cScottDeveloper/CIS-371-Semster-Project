import React from 'react'
import PropTypes from 'prop-types'

WeaponForm.propTypes = {
  weapon: PropTypes.object.isRequired,
  updateWeapon: PropTypes.func.isRequired,
  formMode: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired
};

export default function WeaponForm ({ weapon, updateWeapon, formMode, submitCallback, cancelCallback }) {
  const cancelClicked = (event) => {
    event.preventDefault()
    cancelCallback()
  };

  // The form will have two different sets of buttons:
  // * A "Create" button when creating, and
  // * An "Update" and "Cancel" button when updating.
  const renderButtons = () => {
    if (formMode === 'new') {
      return (
        <button type="submit" className="btn btn-primary">Create</button>
      )
    } else {
      return (
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="submit" className="btn btn-danger" onClick={cancelClicked}>Cancel</button>
        </div>
      )
    }
  } // end renderButtons

  // In this version, the Armor component needs access to the state so it can initialize the
  // form fields when the edit button is clicked.  Therefore we move the state up.

  const formSubmitted = (event) => {
    // Prevent the browser from re-loading the page.
    event.preventDefault();
    submitCallback()
  }

  return (
    <div className="weapon-form">
      <h1> Weapons </h1>
      <form onSubmit={formSubmitted}>
        <div className="form-group">
          <label>Weapon Type</label>
          <input type="text" className="form-control" name="weaponType" id="weaponType"
                 placeholder="Two-handed" value={weapon.weaponType} onChange={(event) => updateWeapon('weaponType', event.target.value.toUpperCase())} />
        </div>
        <div className="form-group">
          <label htmlFor="weaponName">Weapon Name</label>
          <input type="text" className="form-control" name="weaponName" id="weaponName"
                 placeholder="Name of weapon" value={weapon.weaponName} onChange={(event) => updateWeapon('weaponName', event.target.value.toUpperCase())} />
        </div>
        <div className="form-group">
          <label htmlFor="damage">Damage</label>
          <input type="number" className="form-control" id="damage"
                 placeholder="15" value={weapon.damage}  onChange={(event) => updateWeapon('damage', event.target.value)} />
        </div>
        {renderButtons()}
      </form>
    </div>
  )
}
