import React from 'react';

const NewSmurfForm = props => {
  const [data, setData] = useState({
    name: '',
    age: '',
    height: '' 
  })

  return (
    <form>
      <input type="text" name="name" placeholder="Smurf Name" />
      <input type="text" name="age" placeholder="Age" />
      <input type="text" name="height" placeholder="Height" />
    </form>
  )
}

export default NewSmurfForm;