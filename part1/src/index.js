import React from 'react'
import ReactDOM from 'react-dom'

/*
const Header = ({course}) => <h1>{course}</h1>
**/

const Header = (props) => {
  return <h1>{props.course}</h1>
}


const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} ex = {props.parts[0].exercises} /><br/>
      <Part part = {props.parts[1].name} ex = {props.parts[1].exercises} /><br/>
      <Part part = {props.parts[2].name} ex = {props.parts[2].exercises} /><br/>
    </div>
  )
}

const Part = (props) => {
  const part = props.part + ' ' + props.ex
  return part
}

const Total = (props) => {
  return <p>{props.msg} {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const App = () => {
  console.log('Empezando')
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
    message: 'Number of exercises'
  }
  return (
    <div>
      <Header course = {course.name} /> 
      <Content parts = {course.parts} />
      <Total msg = {course.message} parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))