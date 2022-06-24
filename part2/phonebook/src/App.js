import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import { Persons } from './Components/Persons';



const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ usedFilter, setusedFilter] = useState(false)
  const [ filterList, setFilterList ] = useState(persons)
  const message = newName + ' is already added to phonebook'

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

    if (isInFilter.lengt === 0)
      setusedFilter(false)
    else 
      setusedFilter(true)
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
      {
        usedFilter === false ?(
          <Persons filterList={persons} />
        ):( 
          <Persons filterList={filterList} />
        )
      }
    </div>
  )
}

export default App;
