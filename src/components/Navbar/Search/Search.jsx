import React from "react";
import cls from "./search.module.scss";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const clear = () => {
    setSearch("");
  };

  return (
    <form className={cls.form}>
      <input
        className={cls.input}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />

      {search && (
        <span className={cls.close} onClick={clear}>
          &times;
        </span>
      )}
    </form>
  );
};

export default Search;
