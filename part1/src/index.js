import React from 'react'
import ReactDOM from 'react-dom'

/*
const Title = ({course}) => <h1>{course}</h1>
**/

const Title = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return <p>{props.part} {props.ex}</p>
}

const Total = (props) => {
  return <p>{props.msg} {props.n1 + props.n2 + props.n3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const message = 'Number of exercises'
  return (
    <div>
      <Title course = {course} /> 
      <Content part = {part1} ex = {exercises1} />
      <Content part = {part2} ex = {exercises2} />
      <Content part = {part3} ex = {exercises3} />
      <Total msg = {message} n1 = {exercises1} n2 = {exercises2} n3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))