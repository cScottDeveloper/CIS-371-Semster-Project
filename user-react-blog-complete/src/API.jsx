const apiURL = 'http://localhost:3001'

export default class API {
  static fetchWeapons () {
    return fetch(`${apiURL}/weapons`)
      .then(response => {
        // Notice: At this point, we have only the headers.  We can't
        // access the JSON data.
        console.log('Response from /weapons ')
        console.log(response)

        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Got a ${response.status} status.`)
        }
      })
      .then(data => {
        console.log('JSON data from /weapons')
        console.log(data)
        return data
      })
  }// end fetchWeapons

  static fetchArmor () {
    return fetch(`${apiURL}/armor`)
        .then(response => {
          // Notice: At this point, we have only the headers.  We can't
          // access the JSON data.
          console.log('Response from /armor ')
          console.log(response)

          if (response.ok) {
            return response.json()
          } else {
            throw new Error(`Got a ${response.status} status.`)
          }
        })
        .then(data => {
          console.log('JSON data from /armor')
          console.log(data)
          return data
        })
  }//end of fetchArmor

  static fetchLocations () {
    return fetch(`${apiURL}/locations`)
        .then(response => {
          // Notice: At this point, we have only the headers.  We can't
          // access the JSON data.
          console.log('Response from /locations ')
          console.log(response)

          if (response.ok) {
            return response.json()
          } else {
            throw new Error(`Got a ${response.status} status.`)
          }
        })
        .then(data => {
          console.log('JSON data from /locations')
          console.log(data)
          return data
        })
  }//end of fetchLocation

  static postNewWeapon (weapon) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      //turns the object into a json string
      body: JSON.stringify(weapon)
    }
    console.log('Attempting to post new weapon')
    //prints the string weapon
    console.log(weapon)
    return fetch(`${apiURL}/weapons`, options).then(async response => {
      console.log('The POST response.')
      console.log(response)
      if (response.ok) {
        return response.json()
      } else if (response.status === 422) {
        const data = await response.json()
        console.log('Validation message: ')
        console.log(data)
        throw new Error(`Server validation failed: ${data.message}`)
      } else {
        throw new Error(`Got a ${response.status} status.`)
      }
    })
  }//end of post weapon

  static postNewArmor (armor) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      //turns the object into a json string
      body: JSON.stringify(armor)
    }
    console.log('Attempting to post new armor')
    //prints the string weapon
    console.log(armor)
    return fetch(`${apiURL}/armor`, options).then(async response => {
      console.log('The POST response.')
      console.log(response)
      if (response.ok) {
        return response.json()
      } else if (response.status === 422) {
        const data = await response.json()
        console.log('Validation message: ')
        console.log(data)
        throw new Error(`Server validation failed: ${data.message}`)
      } else {
        throw new Error(`Got a ${response.status} status.`)
      }
    })
  }//end of post armor

  static updateWeapon(weapon) {
    const options = {
      method: 'PUT',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify(weapon)
    };
    console.log('Attempting to updateWeapon weapon');
    console.log(weapon);
    return fetch(`${apiURL}/weapons/${weapon.id}`, options).then(
      async response => {
        console.log('The PUT response.')
        console.log(response)
        if (response.ok && response.status === 204) {
          return true
        } else if (response.status === 422) {
          const data = await response.json()
          console.log('Validation message: ')
          console.log(data)
          throw new Error(`Server validation failed: ${data.message}`)
        } else {
          throw new Error(`Got a ${response.status} status.`)
        }
      }
    )
  } // end updateWeapon

  static updateArmor (armor) {
    const options = {
      method: 'PUT',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify(armor)
    };
    console.log('Attempting to update armor set');
    console.log(armor);
    return fetch(`${apiURL}/armor/${armor.id}`, options).then(
        async response => {
          console.log('The PUT response.')
          console.log(response)
          if (response.ok && response.status === 204) {
            return true
          } else if (response.status === 422) {
            const data = await response.json()
            console.log('Validation message: ')
            console.log(data)
            throw new Error(`Server validation failed: ${data.message}`)
          } else {
            throw new Error(`Got a ${response.status} status.`)
          }
        }
    )
  } // end updateArmor

  static updateLocation (location) {
    const options = {
      method: 'PUT',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify(location)
    };
    console.log('Attempting to update location');
    console.log(location);
    return fetch(`${apiURL}/location/${location.id}`, options).then(
        async response => {
          console.log('The PUT response.')
          console.log(response)
          if (response.ok && response.status === 204) {
            return true
          } else if (response.status === 422) {
            const data = await response.json()
            console.log('Validation message: ')
            console.log(data)
            throw new Error(`Server validation failed: ${data.message}`)
          } else {
            throw new Error(`Got a ${response.status} status.`)
          }
        }
    )
  } // end updateLocation

  static deleteWeapon (id) {
    const options = {
      method: 'DELETE'
    }
    console.log('Attempting to deleteWeapon weapon with id ' + id)
    return fetch(`${apiURL}/weapons/${id}`, options).then(async response => {
      console.log('The DELETE response.')
      console.log(response)
      if (response.ok && response.status === 204) {
        return true
      } else {
        throw new Error(`Got a ${response.status} status`)
      }
    })
  } // end deleteWeapon

  static deleteArmor (id) {
    const options = {
      method: 'DELETE'
    }
    console.log('Attempting to delete armor with id ' + id)
    return fetch(`${apiURL}/armor/${id}`, options).then(async response => {
      console.log('The DELETE response.')
      console.log(response);
      if (response.ok && response.status === 204) {
        return true
      } else {
        throw new Error(`Got a ${response.status} status`)
      }
    })
  } // end deleteArmor

} // end class API
