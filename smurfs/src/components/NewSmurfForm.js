import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const NewSmurfForm = props => {
  const { addSmurf } = props;
  const [data, setData] = useState({
    name: '',
    age: '',
    height: '' 
  })

  const handleChanges = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={() => addSmurf(data) }>
      <input type="text" name="name" placeholder="Smurf Name" onChange={handleChanges} />
      <input type="text" name="age" placeholder="Age" onChange={handleChanges} />
      <input type="text" name="height" placeholder="Height" onChange={handleChanges} />
      <button>Add Smurf</button>
    </form>
  )
}

export default connect(null, { addSmurf })(NewSmurfForm);