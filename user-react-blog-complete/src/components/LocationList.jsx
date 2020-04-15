import React from 'react'
import PropTypes from 'prop-types'

function LocationListItem ({ location, onEditClicked}) {
  // Notice that the buttons currently don't do anything when clicked.
  return (
    <tr className="locationTable">
        <td className="locationName"><b>Location:</b> {location.locationName}</td>
        <td className="locationDescription"><b>Description:</b> {location.description}</td>
      <td className="col-md btn-toolbar">
        <button className="btn btn-success btn-md" onClick={event => onEditClicked(location)}>
          <i className="glyphicon glyphicon-pencil"></i> Edit
        </button>
      </td>
    </tr>
  )
}
//Checks the types to make sure they are the correct property types for the location
LocationListItem.propTypes = {
  location: PropTypes.object.isRequired,
  onEditClicked: PropTypes.func.isRequired,
};

export default function LocationList ({ location, onEditClicked}) {
  const locationItems = location.map((location) => (
    <LocationListItem key={location.id} location={location} onEditClicked={onEditClicked} />
  ));

  return (
    <div className="location-list">
      <table className="table table-hover">
        <thead>
        </thead>
        <tbody>
          {locationItems}
        </tbody>
      </table>
    </div>
  )
}

//Type checking for the location list
LocationList.propTypes = {
  location: PropTypes.array.isRequired,
  onEditClicked: PropTypes.func.isRequired,
};
