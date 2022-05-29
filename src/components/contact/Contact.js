import { Box, Container, Grid, Paper, Button, Stack } from "@mui/material";
import { Card } from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  BottomContainer,
  MyText,
  secondColor,
  secondaryBgColor,
  StyledContainer,
  whiteColor,
  myFont,
} from "../common/commonStyles";

function handleSubmit() {}

export const Contact = () => {
  return (
    <ContactElement name="contact">
      <ContactContainer id="contactContainer">
        <ContactStack id="contactStack" direction="row" spacing={2}>
          <ContactBox id="contactBox">
            <ContactHeading variant="h2" gutterBottom>
              <LineDiv id="random"></LineDiv>
              Have something to work on?
              <br />
              Get in touch.
            </ContactHeading>
            {/* <MyText variant="body1">
          I'm currently interested in freelance opportunities or a good job.
          Feel free to contact me or send me message if you have a project in
          mind, want to hire me for building a personal website or just want to
          say hello.
        </MyText> */}
            {/* <MessageButton variant="outlined">Send A Message</MessageButton> */}
          </ContactBox>
          <ContactInfoBox component="form" id="contactInfoBox">
            <InfoField maxLength={40} id="nameField" type="text" placeholder="Your Name" />
            <StyleDiv />
            <InfoField
              id="emailIdField"
              type="text"
              maxLength={40}
              placeholder="Your email address"
            />
            <StyleDiv />
            <TextField
              id="messageField"
              placeholder="Message"
              maxLength={1000}
              style={{ minHeight: "10%", paddingBottom: "10%" }}
            />
            <StyleDiv />
            <MessageButton
              id="profileButton"
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </MessageButton>
          </ContactInfoBox>
        </ContactStack>
      </ContactContainer>
    </ContactElement>
  );
};

const ContactStack = styled(Stack)`
  && {
    width: 100%;
    @media (max-width: 767px) {
      padding: 15% 0%;
      display: block;
    }
    @media (min-width: 768px) {
      padding: 25% 0%;
    }
  }
`;

const StyleDiv = styled.div`
  padding-top: 3%;
`;

const InfoField = styled.input`
  && {
    background-color: transparent;
    color: ${whiteColor}!important;
    font-family: ${myFont}!important;
    font-size: 20px;
    border: 0px;
    text-align: left;
    cursor: pointer;
    padding-bottom: 5%;
    border-bottom: 3px solid ${secondColor};
    &:hover, &:focus {
      border: 2px solid ${secondColor};
    }
  }
`;

const TextField = styled.textarea`
  && {
    background-color: transparent;
    cursor: pointer;
    color: ${whiteColor}!important;
    font-family: ${myFont}!important;
    font-size: 20px;
    border: 0px;
    text-align: left;
    border-bottom: 3px solid ${secondColor};
    &:hover, &:focus {
      border: 2px solid ${secondColor};
    }
  }
`;

const ContactContainer = styled(StyledContainer)`
  && {
    display: flex;
  }
`;

const LineDiv = styled.div`
  && {
    background: ${secondColor};
    min-width: 7px;
    margin-right: 5%;
  }
`;

const ContactElement = styled(Element)`
  background-color: ${secondaryBgColor};
`;

const ContactBox = styled(Box)`
  display: grid;
  align-content: baseline;
  @media (max-width: 767px) {
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    padding-right:8%;
    width: 50%;
  }
`;

const ContactInfoBox = styled(Box)`
  display: grid;
  align-content: baseline;
  @media (max-width: 767px) {
    padding-top:10%;
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MessageButton = styled(Button)`
  && {
    padding: 8px 0px;
    color: ${whiteColor};
    background-color: ${secondColor};
    font-family: ${myFont};
    width: 40%;
    font-size: 20px;
    text-transform: capitalize;
  }
`;

const ContactHeading = styled(MyText)`
  && {
    display: flex;
    text-align: left;
    @media (max-width: 374px) {
      font-size: !important;
    }
    @media (min-width: 375px) and (max-width: 424px) {
      font-size: !important;
    }
    @media (min-width: 425px) and (max-width: 599px) {
      font-size: !important;
    }
    @media (min-width: 600px) and (max-width: 767px) {
      font-size: !important;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: !important;
    }
    @media (min-width: 1024px) and (max-width: 1199px) {
      font-size: !important;
    }
    @media (min-width: 1200px) {
      font-size: 4rem !important;
    }
  } 
`;
