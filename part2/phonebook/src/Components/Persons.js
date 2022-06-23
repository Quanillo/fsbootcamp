import { Person } from "./Person"

const Persons = (props) => {
    return (
      <div>
        {props.filterList.map((item =>
        <Person key={item.name} props={item}/>
        ))}
      </div>
    )
  }

  export {Persons}