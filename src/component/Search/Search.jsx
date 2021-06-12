import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { setFind } = props;
  const [search, setSearch] = useState("");

  const onChange = (f) => {
    setSearch(f);
    setFind(f);
  };

  return (
    <>
      <input
        placeholder="Find your character..."
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Search;
