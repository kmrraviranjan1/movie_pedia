import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Image } from "./Actor.styles";
const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  ur: PropTypes.string,
};

export default Actor;
