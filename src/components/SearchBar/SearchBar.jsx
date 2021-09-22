import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true)
  useEffect(()=>{
    if(initial.current){
      initial.current=false;
      return
    }
      const timer = setTimeout(()=>{setSearchTerm(state)},500)
      return ()=>{clearTimeout(timer)}
  },[setSearchTerm,state])
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
          placeholder="Search Movie"
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
