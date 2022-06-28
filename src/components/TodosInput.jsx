import { useState } from "react";

export const TodosInput = ({ handleClick }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" placeholder="Enter Todo" onChange={handleChange} />
      <button onClick={() => handleClick(text)}>Add Todo</button>
    </>
  );
};
