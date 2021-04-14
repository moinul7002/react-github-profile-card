import axios from "axios";
import React, { useState } from "react";
import "../../index.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${input}`);
    onSubmit(response.data);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="GitHub Username"
        required
      />
      <button>Add Profile</button>
    </form>
  );
};

export default SearchBar;
