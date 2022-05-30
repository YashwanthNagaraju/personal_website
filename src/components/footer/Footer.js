import React from "react";
import styled from "styled-components";
import { MyText, primaryBgColor } from "../common/commonStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <MyText variant="body1" gutterBottom>
          Built by Yashwanth Nagaraju.
        </MyText>
      </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${primaryBgColor};
`;
const StyledDiv = styled.div`
`;
