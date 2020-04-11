import React from 'react'
import PropTypes from 'prop-types'

function WeaponListItem ({ weapon, onEditClicked, onDeleteClicked }) {
  // Notice that the buttons currently don't do anything when clicked.
  return (
    <tr>
      <td className="col-md-1">{weapon.weaponType}</td>
      <td className="col-md-1">{weapon.weaponName}</td>
      <td className="col-md-1">{weapon.damage}</td>
      <td className="col-md-1 btn-toolbar">
        <button className="btn btn-success btn-sm" onClick={event => onEditClicked(weapon)}>
          <i className="glyphicon glyphicon-pencil"></i> Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={event => onDeleteClicked(weapon.id)}>
          <i className="glyphicon glyphicon-remove"></i> Delete
        </button>
      </td>
    </tr>
  )
}
//Checks the types to make sure they are the correct property types for the weapon
WeaponListItem.propTypes = {
  weapon: PropTypes.object.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

export default function WeaponList ({ weapons, onEditClicked, onDeleteClicked }) {
  const weaponItems = weapons.map((weapon) => (
    <WeaponListItem key={weapon.id} weapon={weapon} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked} />
  ));

  return (
    <div className="weapon-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-1">Weapon Type</th>
            <th className="col-md-1">Weapon Name</th>
            <th className="col-md-1">Damage</th>
          </tr>
        </thead>
        <tbody>
          {weaponItems}
        </tbody>
      </table>
    </div>
  )
}

//Type checking for the weaponList
WeaponList.propTypes = {
  weapons: PropTypes.array.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};
