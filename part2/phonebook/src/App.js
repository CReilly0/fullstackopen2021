import React, { useState, useEffect } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'
import phonebookService from './Services/phonebook'
import Notification from './Components/Notification'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const handleNameChange = (e) => { setNewName(e.target.value) }
  const handleNumberChange = (e) => { setNewNumber(e.target.value) }
  const handleFilterChange = (e) => { setFilter(e.target.value) }

  const handleDelete = ({ person }) => {
    const newPersons = persons.filter((p) => p.id !== person.id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`)

    if (confirmDelete) {
      phonebookService
      .remove(person.id, 1)
      .then(setPersons(newPersons))
    }
  }

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //if filter is empty return full persons list, or return filtered list if filter
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
    //If the name already exists, check if user wants to edit number
    if(JSON.stringify(persons).includes(JSON.stringify(newName))) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      const oldPerson = persons.find((p) => p.name === newName)
      const newPerson = { ...oldPerson, number: newNumber}
      if (result) {
        phonebookService
        .update(oldPerson.id, newPerson)
        .then(resultPerson => {
          setPersons(persons.map(p => p.id !== oldPerson.id ? p : resultPerson));
          setNotification(`${resultPerson.name}'s number has been changed.`);
          setTimeout(() => {
          setNotification(null)
          }, 5000);
        }
        )
      }
    }
    //else add new person
    else {
      phonebookService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject));
        setNotification(`Added ${personObject.name}`);
        setTimeout(() => {
          setNotification(null)
      }, 5000);
    })}
    //reset forms 
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h3>Phonebook</h3>
      <Notification message={notification} />
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