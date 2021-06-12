import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import AboutImgUrl from "../../assets/illustrations/i12.jpg";



const MoreAboutContainer = styled(Element)`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  text-shadow:  black;
  font-weight: bold;
 
  
  color: grey;
 
  line-height: 1.7;
  @media screen and (max-width: 480px) {
font-size:13px;

  
  }
`;

const AboutImg = styled.img`
  width: 700px;
  height: 400px;
  margin-top: 2.5em;
  margin-left: 2em;
  overflow: hidden;
  
  transform: translatey(0px);
  -webkit-filter: drop-shadow(5px 5px 15px #6adfb2);
  filter: drop-shadow(5px 5px 15px #6adfb2);
  animation: float 3s ease-in-out infinite;
  @keyframes float {
    0% {
      filter: drop-shadow(5px 5px 15px #6adfb2));
      transform: translatey(0px);
    }
    50% {
      filter: drop-shadow(5px 5px 15px #6adfb2);
      transform: translatey(-20px);
    }
    100% {
      filter: drop-shadow(5px 5px 15px #6adfb2);
      transform: translatey(0px);
    }
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
     
      <SectionTitle style={{ fontSize: '50px' ,color: 'black'}}>The Path to Success</SectionTitle>
      <AboutContainer>
        <AboutText>
          

<i>"Electura lays a path of realizable and practical knowledge for young minds, <br></br>by acting as a rendezvous between them and high academic achievers, through technology."</i>        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
