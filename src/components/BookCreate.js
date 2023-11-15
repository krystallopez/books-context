import React, { useState } from "react";

function BookCreate({ onCreate }) { // onCreate is the prop used to house the createBook function that passes the title as the argument to create a new book title 
  const [title, setTitle] = useState(""); // the state to track changes made to the title 

  // updates title state to hold the value of the user input
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // submit event handler
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents data from reloading
    onCreate(title);
    setTitle(""); // updates our state, set to empty string this will re-render book create component and force the input element to show a value of an empty string,
  };

  return (
    <>
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button">Create!</button>
        </form>
      </div>
    </>
  );
}

export default BookCreate;
