import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const greeting = [
    {
      "id": 11,
      "name": "Abhinav",
      "salary": 75000
    },
    {
      "id": 2131,
      "name": "Gaurav",
      "salary": 62000
    },
    {
      "id": 3012,
      "name": "Raj",
      "salary": 32000
    }
  ];

  const [salaryUpdate, setSalaryUpdate] = useState([]);

  let passvalue = (e) => {
    var empList = greeting.filter((data) => {
      return data.salary < e.salary;
    });
    console.log(empList);
    setSalaryUpdate(empList);
  };

  return (
    <div>
      <h1>Parent</h1>
      <Child message={greeting} func={passvalue} />
      {salaryUpdate.map((value, i) => {
        return (
          <div key={i}>
            <h1>{value.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Parent