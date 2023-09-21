import React, { useState } from "react";
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

// Custom hook for handling form submission
function useFormSubmit(callback) {
  function handleSubmit(e) {
    e.preventDefault();
    callback();
  }

  return handleSubmit;
}

function App() {
  const nameInput = useFormInput("");
  const emailInput = useFormInput("");
  const handleSubmit = useFormSubmit(() => {
    console.log(`Name: ${nameInput.value}, Email: ${emailInput.value}`);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" {...nameInput} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...emailInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
