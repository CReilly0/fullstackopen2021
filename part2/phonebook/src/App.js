import React, { useState } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    if (JSON.stringify(persons).includes(JSON.stringify(newName))) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else (
      setPersons(persons.concat(personObject))
    )
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App