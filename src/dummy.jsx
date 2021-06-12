import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { Navbar } from "./components/navbar";

const Heading = styled.div`
  position: absolute;
  margin-left: 44%;
  margin-top: 10%;
  align-items: center;
`;

export function Dum(props) {
  return (
      <Element name="dummy">
            <Navbar />
            <Heading><h1>{ props.display }</h1></Heading>
            
      </Element>

    );
}