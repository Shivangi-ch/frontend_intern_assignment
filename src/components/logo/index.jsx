import React from "react";
import styled from "styled-components";
import GreenlandLogoImg from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 130px;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={GreenlandLogoImg} alt=" logo" />
      </LogoImg>
     
    </LogoWrapper>
  );
}