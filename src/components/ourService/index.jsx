import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5em;
 
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const ServiceImg = styled.img`
  width: 14em;
  height: 11em;
  overflow: hidden;
  transform: translatey(0px);
  -webkit-filter: drop-shadow(5px 5px 15px #222);
  filter: drop-shadow(5px 5px 15px #222);
  animation: float 3s ease-in-out infinite;
  @keyframes float {
    0% {
      filter: drop-shadow(5px 5px 15px rgba(0,0,0,0.6));
      transform: translatey(0px);
    }
    50% {
      filter: drop-shadow(5px 5px 15px rgba(0,0,0,0.2));
      transform: translatey(-20px);
    }
    100% {
      filter: drop-shadow(5px 5px 15px rgba(0,0,0,0.6));
      transform: translatey(0px);
    }
  }

  @media screen and (max-width: 480px) {
    width: 10em;
    height: 8em;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  // max-height: 20%;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 23px;
  font-weight: 700;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 16px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export function OurSerivce(props) {
  const { imgUrl, title, description,  } = props;

  return (
    <ServiceContainer >
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
}
