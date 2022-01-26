import React, { useState, useEffect } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'
import phonebookService from './Services/phonebook'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  
  const handleDelete = ({ person }) => {
    window.confirm(`Delete ${person.name}?`)
    const newPersons = persons.filter((p) => p.id !== person.id);
    console.log(newPersons)
    phonebookService
    .remove(person.id, 1)
    .then(setPersons(newPersons))
  }

  const handleNameChange = (e) => { setNewName(e.target.value) }
  const handleNumberChange = (e) => { setNewNumber(e.target.value) }
  const handleFilterChange = (e) => { setFilter(e.target.value) }

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
      phonebookService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
      })
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
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App