import React from 'react'
import PropTypes from 'prop-types'

LocationForm.propTypes = {
  location: PropTypes.object.isRequired,
  updateLocation: PropTypes.func.isRequired,
  formMode: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired
};

export default function LocationForm ({ location, updateLocation, formMode, submitCallback, cancelCallback }) {
  const cancelClicked = (event) => {
    event.preventDefault()
    cancelCallback()
  };

  // The form will have two different sets of buttons:
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

  // In this version, the location component needs access to the state so it can initialize the
  // form fields when the edit button is clicked.  Therefore we move the state up.

  const formSubmitted = (event) => {
    // Prevent the browser from re-loading the page.
    event.preventDefault()
    submitCallback()
  }

  return (
    <div className="location-form">
      <h1> Locations </h1>
      <form onSubmit={formSubmitted}>
        <div className="form-group">
          <label>Location Name</label>
          <input type="text" className="locDescription" name="locationName" id="locationName"
                 placeholder="Location Name" value={location.locationName} onChange={(event) => updateLocation('locationName', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="locDescription" name="description" id="description"
                  value={location.description} onChange={(event) => updateLocation('description', event.target.value)} />
        </div>
        {renderButtons()}
      </form>
    </div>
  )
}
