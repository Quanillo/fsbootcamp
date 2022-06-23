import React, { useState } from 'react'
import './App.css';
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import { Persons } from './Components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Peter Pheterson', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ filterList, setFilterList ] = useState(persons)
  const message = newName + ' is already added to phonebook'

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }; 

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value)
    var isInFilter = persons.filter(function (person){
      return person.name.toUpperCase().includes(newFilter.toUpperCase())
    })

    setFilterList(isInFilter)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAdd = {name: newName, number: newNumber}
    const index = persons.findIndex(item => item.name === personToAdd.name)

    if (index === -1)
      setPersons(persons.concat(personToAdd))
    else
      window.alert(message)
    
    setNewName('')
    setNewNumber('')
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter} /> 

      <h3>add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName}
      newName={newName} handleChangeNumber={handleChangeNumber} newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons filterList={filterList} />
    
    </div>
  )
}

export default App;
