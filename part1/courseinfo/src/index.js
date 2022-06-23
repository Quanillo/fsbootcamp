import React from 'react'
import ReactDOM from 'react-dom/client'
import { Course } from './Course';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: 'Makina Code',
      id: 3,
      parts: [
        {
          name: 'Makina code fundamentals',
          exercises: 5,
          id: 1,
        },
        {
          name: 'Perro code essentials',
          exercises: 4,
          id: 2,
        },
        {
          name: 'Translating Perro to Makina',
          exercises: 2,
          id: 3,
        },
      ],
    },
  ]

  return <div>
    {
      courses.map((element) =>
        <Course key={element.id} course={element}/>
      )
    }
  </div>
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);