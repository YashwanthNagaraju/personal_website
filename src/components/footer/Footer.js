import React from "react";
import styled from "styled-components";
import { MyText, primaryBgColor } from "../common/commonStyles";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <MyText variant="body1" gutterBottom>
          testing
        </MyText>
      </StyledDiv>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${primaryBgColor};
`;
const StyledDiv = styled.div`
`;
