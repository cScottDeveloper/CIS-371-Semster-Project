import React from 'react'
import PropTypes from 'prop-types'

function ArmorListItem ({ armor, onEditClicked, onDeleteClicked }) {
  // Notice that the buttons currently don't do anything when clicked.
  return (
    <tr>
      <td className="col-md-1">{armor.armorType}</td>
      <td className="col-md-1">{armor.armorName}</td>
      <td className="col-md-1">{armor.protection}</td>
      <td className="col-md-1 btn-toolbar">
        <button className="btn btn-success btn-sm" onClick={event => onEditClicked(armor)}>
          <i className="glyphicon glyphicon-pencil"></i> Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={event => onDeleteClicked(armor.id)}>
          <i className="glyphicon glyphicon-remove"></i> Delete
        </button>
      </td>
    </tr>
  )
}
//Checks the types to make sure they are the correct property types for the armor
ArmorListItem.propTypes = {
  armor: PropTypes.object.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

export default function ArmorList ({ armor, onEditClicked, onDeleteClicked }) {
  const armorItems = armor.map((armor) => (
    <ArmorListItem key={armor.id} armor={armor} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked} />
  ));

  return (
    <div className="armor-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-1">Armor Type</th>
            <th className="col-md-1">Armor Name</th>
            <th className="col-md-1">Protection</th>
          </tr>
        </thead>
        <tbody>
          {armorItems}
        </tbody>
      </table>
    </div>
  )
}

//Type checking for the armorList
ArmorList.propTypes = {
  armor: PropTypes.array.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};
