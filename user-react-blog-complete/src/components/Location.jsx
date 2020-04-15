import React from 'react'
import LocationForm from './LocationForm'
import LocationList from './LocationList'
import API from '../API'
import PropTypes from 'prop-types'

function ErrorMessage ({ message }) {
  return <div className='errorMessage'>{message}</div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default function Location () {
  const [locationList, setLocationList] = React.useState([]);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...')
  const [errorMessage, setErrorMessage] = React.useState(null)

  const [formMode, setFormMode] = React.useState('new')

  const emptyLocation = { locationName: '', description: ''}
  const [currentLocation, setCurrentLocation] = React.useState(emptyLocation)

  React.useEffect(() => {
    API.fetchLocations().then(data => {
      setLocationList(data)
      setLoadingMessage(null)
    }).catch((message) => {
      setLoadingMessage('Unable to load location list because ' + message)
    })
  }, []);

  const updateLocation = (field, value) => {
    const newLocation = { ...currentLocation };
    newLocation[field] = value;
    setCurrentLocation(newLocation)
  };

  const formSubmitted = () => {
      API.updateLocation(currentLocation).then(() => {
        const newLocationList = [...locationList];
        const locationIndex = locationList.findIndex((location) => location.id === currentLocation.id);

        newLocationList[locationIndex] = currentLocation;
        setLocationList(newLocationList)
      }).catch(message => setErrorMessage(`Failed to update location: ${message}`))
  };

  const editClicked = (location) => {
    setErrorMessage(null);
    setFormMode('updateLocation');
    setCurrentLocation(location)
  };

  const cancelClicked = () => {
    setErrorMessage(null);
    setFormMode('new');
    setCurrentLocation(emptyLocation)
  };

  const errorBlock = errorMessage ? <ErrorMessage message={errorMessage} /> : null

  return (
    <div className="locations">
      {errorBlock}
      <LocationForm formMode={formMode} location={currentLocation} updateLocation={updateLocation}
                  submitCallback={formSubmitted} cancelCallback={cancelClicked} />
      <div />
      {loadingMessage
        ? <p>{loadingMessage}</p>
        : <LocationList location={locationList} onEditClicked={editClicked} />
      }
    </div>
  )
}
