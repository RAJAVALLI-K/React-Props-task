import React from 'react'

const Child = (props) => {
  console.log(props);
  return (
    <div>
      {props.message.map((greet, index) => (
        <div key={index}>
          <p>Id is : {greet.id}</p>
          <p>Name is : {greet.name}</p>
          <p>Salary is : {greet.salary}</p>
          <button onClick={() => { props.func(greet) }}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default Child
