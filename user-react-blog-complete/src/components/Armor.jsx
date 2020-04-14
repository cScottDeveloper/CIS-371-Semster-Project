import React from 'react'
import ArmorForm from './ArmorForm'
import ArmorList from './ArmorList'
import API from '../API'
import PropTypes from 'prop-types'

function ErrorMessage ({ message }) {
  return <div className='errorMessage'>{message}</div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default function Armor () {
  const [armorList, setArmorList] = React.useState([]);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...')
  const [errorMessage, setErrorMessage] = React.useState(null)

  const [formMode, setFormMode] = React.useState('new')

  const emptyArmor = { armorType: '', armorName: '', protection: '' }
  const [currentArmor, setCurrentArmor] = React.useState(emptyArmor)

  React.useEffect(() => {
    API.fetchArmor().then(data => {
      setArmorList(data)
      setLoadingMessage(null)
    }).catch((message) => {
      setLoadingMessage('Unable to load armor sets because ' + message)
    })
  }, []);

  const updateArmor = (field, value) => {
    const newArmor = { ...currentArmor };
    newArmor[field] = value;
    setCurrentArmor(newArmor)
  };

  const formSubmitted = () => {
    setErrorMessage(null);
    if (formMode === 'new') {
      API.postNewArmor(currentArmor).then(data => {
        console.log('Received data');
        console.log(data);
        if (data.id) {
          currentArmor.id = data.id;
          setArmorList([...armorList, currentArmor])
        } else {
          console.log("New armor wasn't created.")
        }
      }).catch(message => setErrorMessage(`Failed to create new armor: ${message}`))
    } else {
      API.updateArmor(currentArmor).then(() => {
        const newArmorList = [...armorList];
        const armorIndex = armorList.findIndex((armor) => armor.id === currentArmor.id);

        newArmorList[armorIndex] = currentArmor;
        setArmorList(newArmorList)
      }).catch(message => setErrorMessage(`Failed to update armor: ${message}`))
    }
  };

  const editClicked = (armor) => {
    setErrorMessage(null);
    setFormMode('updateArmor');
    setCurrentArmor(armor)
  };

  const cancelClicked = () => {
    setErrorMessage(null);
    setFormMode('new');
    setCurrentArmor(emptyArmor)
  };

  const deleteClicked = (id) => {
    API.deleteArmor(id).then(() => {
      setArmorList(armorList.filter((item) => item.id !== id));
      cancelClicked()
    }).catch(message => setErrorMessage(`Failed to delete armor: ${message}`))
  }

  const errorBlock = errorMessage ? <ErrorMessage message={errorMessage} /> : null

  return (
    <div className="armor">
      {errorBlock}
      <ArmorForm formMode={formMode} armor={currentArmor} updateArmor={updateArmor}
                  submitCallback={formSubmitted} cancelCallback={cancelClicked} />
      <div />
      {loadingMessage
        ? <p>{loadingMessage}</p>
        : <ArmorList armor={armorList} onEditClicked={editClicked} onDeleteClicked={deleteClicked} />
      }
    </div>
  )
}
