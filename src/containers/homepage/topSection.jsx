import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
 
  
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #000000e1 , rgba(0, 105, 137, 0.90)), url("https://image.freepik.com/free-photo/tutor-college-student-group-sitting-desk-library-studying-reading-doing-homework_28283-1230.jpg") ;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 50px;
  font-weight: 600;
  
  line-height: 1.4;
  
  color: #fff;
  margin: 0;
  
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;
const Extratext = styled.div`
  color: white;
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <MotivationalText>Future achievers study from IITians Online</MotivationalText>
          <Marginer direction="vertical" margin="2.5em" />
          <Extratext><i>Your Learning Journey Matters to Us</i></Extratext>

          <Marginer direction="vertical" margin="7em" />
          
          <Button><Link type="button" to="/auth/register" style={{ textDecoration: 'none' ,color: 'black'}}>Register for Free</Link></Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
