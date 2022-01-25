import React, { useState } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (e) => { setNewName(e.target.value) }
  const handleNumberChange = (e) => { setNewNumber(e.target.value) }
  const handleFilterChange = (e) => { setFilter(e.target.value) }

  //If no filter, return persons. If filter, return filtered persons
  const personsToShow = (filter==="")
  ? persons
  : persons.filter((person) => 
  (person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1))

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (JSON.stringify(persons).includes(JSON.stringify(newName))) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else (
      setPersons(persons.concat(personObject))
    )
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h3>Phonebook</h3>
      <Filter handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App