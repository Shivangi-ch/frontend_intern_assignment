import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/profile_picture_1.jpg";
import User2Img from "../../assets/pictures/profile_picture_2.jpg";
import User3Img from "../../assets/pictures/profile_picture_3.jpg";
import User4Img from "../../assets/pictures/profile_picture_4.jpeg";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
 

`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;


  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
   
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin-top:40px;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #6adfb2;
    background-image: linear-gradient(to bottom, transparent 10%, #00c9ff 90%);
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>Happy Students, Happy Parents!
</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" There are a lot of services in the market for e-learning but I was looking for something that I can trust on. I contacted Electura for a doubt clearing session and I was amazed at the quality of the teachers they have."
              username="Rohit Student"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="I was worried about my child as he was never able to focus on his studies. I got to know about Electura & looking at the background of their teachers. It was good to see such dedicated tutors, genuinely thinking about a child’s future."
              username="Neha Parent"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="Though i had little bit of understanding about coaching. Thanks much to the instructor for making it plain and simple for the learners.They put forward their best foot in order to help me. I am surely going to continue with Electura for my study journey ."
              username="John Student"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="  always strive for creating value in this world. Though having worked in the corporate as well as going through the MBA process after cracking IIT, I was looking for the satisfaction of shaping the future. Electura gave me a platform to give back to the society and help young minds of the world"
              username="Harsh Tutor"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
