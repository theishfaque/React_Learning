import React from 'react'
import propTypes from 'prop-types'


const StudentData = (props) => {
  return (
    <div>
      My name is {props.name} age {props.age}.
    </div>
  )
}

StudentData.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

StudentData.defaultProps = {
  name : "Student",
  age: 21
}

export default StudentData;
