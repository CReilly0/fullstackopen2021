import React from 'react';

const PersonForm = (props) => {

  return( 
    <>
      <form onSubmit={props.addName}>
        <div>
          name: 
          <input 
            value={props.newName}
            onChange={props.handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
};

export default PersonForm;
