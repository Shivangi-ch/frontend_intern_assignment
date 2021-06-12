import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";

import Service1Img from "../../assets/illustrations/i1.png";
import Service2Img from "../../assets/illustrations/i11.png";
import Service3Img from "../../assets/illustrations/i10.png";

const ServicesContainer = styled(Element)`
 
  overflow:hidden;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:170px;
 
  padding: 10px 0;
  @media screen and (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
    margin-left:-20px;
  }
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      {/* <SectionTitle>Best Quality Software</SectionTitle> */}
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Online Live Classes"
        description="Get your concepts clear directly through a dedicated coach"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="IITian Teachers"
        description="Premium teachers who have passed one of the toughest exams themselves"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="For Classes 9th to 12th"
        description="Changing the way of learning for 9th to 12th grade students with online 1 to 1 classes"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
