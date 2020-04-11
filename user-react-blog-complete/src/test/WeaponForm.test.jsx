import React from 'react'
import { render } from '@testing-library/react'
import WeaponForm from '../components/WeaponForm'

describe('dummy', () => {
  it('does something', () => {

    function Dummy () {
      return <span>Dummy</span>
    }

    let stuff = render(<Dummy />)
  })
})

describe('WeaponForm', () => {

  let props
  beforeEach(() => {
    props = {
      weapon: { armorType: '', armorName: '', protection: '' },
      updateWeapon: jest.fn(),
      formMode: 'new',
      submitCallback: jest.fn(),
      cancelCallback: jest.fn(),
    }
  })

  it('Initializes input fields to empty', () => {

    // Render User form and keep the resulting DOM element.
    const { container } = render(<WeaponForm {...props} />)

    // Search the component for everything that matches the CSS 
    // selector "form input" (i.e., allWeapons the form inputs.)
    const inputElements = container.querySelectorAll('form input')

    // Assert that there are three of them.
    expect(inputElements.length).toBe(3)

    // Make sure each one is blank.
    inputElements.forEach((element) => expect(element.value).toEqual(''))
  })

  it('Initializes input fields when provided', () => {

    // Customize the props for this test.
    props.weapon = { armorType: 'Dagger', armorName: 'Dagger', protection: '10' }

    // Render ArmorForm
    const { container } = render(<WeaponForm {...props} />)

    // Get armorType input element, then verify it was initialized properly.
    const weaponTypeInput = container.querySelector('#armorType')
    expect(weaponTypeInput.value).toBe('Dagger')

    // Get armorName input element, then verify it was initialized properly.
    const weaponNameInput = container.querySelector('#armorName')
    expect(weaponNameInput.value).toBe('Dagger')

    // Get protection input element, then verify it was initialized properly.
    const damageInput = container.querySelector('#protection')
    expect(damageInput.value).toBe('10')
  });

  it('has "Create" button in "new" mode', () => {
    props.formMode = 'new';
    const { container } = render(<WeaponForm {...props} />)

    // Look for allWeapons the buttons.
    const buttons = container.querySelectorAll('form button');
    // There should be exactly one.
    expect(buttons.length).toBe(1);
    // It should be "Create"
    expect(buttons[0].textContent).toEqual('Create');
  })

  it('has "Save" and "Cancel" buttons in "updateWeapon" mode', () => {
    props.formMode = 'updateArmor';
    const { container } = render(<WeaponForm {...props} />)

    // Look for allWeapons the buttons.
    const buttons = container.querySelectorAll('form button');
    // There should be exactly two.
    expect(buttons.length).toBe(2);
    console.log("The buttons:");
    console.log(buttons);
    let text = buttons.map((b) => b.textContent);
    // It should be "Create"
    expect(buttons[0].textContent).toEqual(['Save', 'Cancel']);
  })

});
