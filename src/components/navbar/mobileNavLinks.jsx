 
import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content-center;
  
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 32%;
  list-style: none;
  background-color: white;
  width: 100vw;
  flex-direction: column;
  position:absolute;
  top: 60px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: black;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
`;



// const Marginer = styled.div`
//   height: 1em;
// `;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <LinkItem>
                <Link type="button" to="/home" style={{ textDecoration: 'none' ,color: 'black'}}>Home</Link>
        </LinkItem>
              <LinkItem>
                <Link type="button" to="/about" style={{ textDecoration: 'none' ,color: 'black'}}>About us</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/tutors" style={{ textDecoration: 'none' ,color: 'black'}}>Our Tutors</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/courses" style={{ textDecoration: 'none' ,color: 'black'}}>Buy a Course</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/contact" style={{ textDecoration: 'none' ,color: 'black'}}>Contact Us</Link>
              </LinkItem>
          
          <Accessibility />
          
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
