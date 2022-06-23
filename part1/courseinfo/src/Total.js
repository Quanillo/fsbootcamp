export const Total = (props) => {
    let total = 0
    props.parts.map(
      (element) =>
        total = total + element.exercises
    )
    return(
      <p><b>total of {total} exercises</b></p>
    )
  }