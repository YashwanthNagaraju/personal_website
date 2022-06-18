import React from "react";
import styled from "styled-components";
import { MyText } from "../common/commonStyles";

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
&&{
  min-height: 10vh;
}
`;
const StyledDiv = styled.div``;
