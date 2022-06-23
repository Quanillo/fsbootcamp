import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

export const Course = (props) => {
    const { course } = props
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
  }