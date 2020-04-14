import React from 'react'
import PropTypes from 'prop-types'

ArmorForm.propTypes = {
  armor: PropTypes.object.isRequired,
  updateArmor: PropTypes.func.isRequired,
  formMode: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired
};

export default function ArmorForm ({ armor, updateArmor, formMode, submitCallback, cancelCallback }) {
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
        <button type="submit" className="btn btn-primary">Forge</button>
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
    event.preventDefault()
    submitCallback()
  }

  return (
    <div className="armor-form">
      <h1> Armor Sets </h1>
      <form onSubmit={formSubmitted}>
        <div className="form-group">
          <label>Armor Type</label>
          <input type="text" className="form-control" name="armorType" id="armorType"
                 placeholder="Armor Type" value={armor.armorType} onChange={(event) => updateArmor('armorType', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="armorName">Armor Name</label>
          <input type="text" className="form-control" name="armorName" id="armorName"
                 placeholder="Armor Name" value={armor.armorName} onChange={(event) => updateArmor('armorName', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="protection">Protection</label>
          <input type="number" className="form-control" id="protection"
                 placeholder="255" value={armor.protection} onChange={(event) => updateArmor('protection', event.target.value)} />
        </div>
        {renderButtons()}
      </form>
    </div>
  )
}
