import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 2rem;
  }
  h1 {
    font-family: Arial, helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 8rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -1rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sana-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
  const { quote, author } = frase;

  if (Object.keys(frase) === 0) return null;

  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>{author}</p>
    </ContenedorFrase>
  );
};

Frase.propTypes = {
  frase: PropTypes.object.isRequired
};

export default Frase;
