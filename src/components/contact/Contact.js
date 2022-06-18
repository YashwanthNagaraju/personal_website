import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Element } from "react-scroll";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  MyText,
  blueColor,
  primaryBgColor,
  BottomContainer,
  whiteColor,
  myFont,
  LineDiv,
} from "../common/commonStyles";
import { useState } from "react";
import { apiKey } from "./model/emailKey";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailID) {
      return alert("email id is empty");
    }
    if (!message) {
      return alert("message can't be empty");
    }
    try {
      var templateParams = {
        from_name: name,
        from_email: emailID,
        message: message,
      };
      e.preventDefault();
      emailjs
        .send(
          apiKey.SERVICE_ID,
          apiKey.TEMPLATE_ID,
          templateParams,
          apiKey.USER_ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } catch {
      console("Failed to create an account.");
    }
  }

  return (
    <ContactElement name="contact">
      <ContactContainer id="contactContainer">
        <ContactStack id="contactStack" direction="row" spacing={2}>
          <ContactBox id="contactBox">
            <ContactHeading variant="h2" gutterBottom>
              <LineDiv id="randomLine"></LineDiv>
              Have a project on your mind?
              <br />
              Get in touch.
            </ContactHeading>
          </ContactBox>
          <ContactInfoBox component="form" id="contactInfoBox">
            <HiddenLabel for="nameField">Name: </HiddenLabel>
            <InfoField
              maxLength={40}
              id="nameField"
              type="text"
              placeholder="Your Name"
              style={{}}
              onChange={(e) => setName(e.target.value)}
            />
            <StyleDiv />
            <HiddenLabel for="emailIdField">Email ID: </HiddenLabel>
            <InfoField
              id="emailIdField"
              type="text"
              maxLength={40}
              placeholder="Your email address"
              onChange={(e) => setEmailID(e.target.value)}
            />
            <StyleDiv />
            <HiddenLabel for="messageField">Message: </HiddenLabel>
            <TextField
              id="messageField"
              placeholder="Message"
              type="text"
              maxLength={1000}
              style={{
                minHeight: "10%",
                paddingBottom: "10%",
              }}
              onChange={(e) => setMessage(e.target.value)}
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

export default Contact;

const ContactContainer = styled(BottomContainer)`
  && {
    -webkit-animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    @-webkit-keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @media (max-width: 375px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 85% !important;
      display: inline-flex;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      max-width: 85% !important;
      display: inline-flex;
    }
    @media (min-width: 1200px) {
      max-width: 80% !important;
      display: inline-flex;
    }
  }
`;

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const ContactStack = styled(Stack)`
  && {
    width: 100%;
    @media (max-width: 768px) {
      display: block;
    }
    @media (min-width: 768px) {
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
    border-bottom: 3px solid ${blueColor};
    &:hover,
    &:focus {
      border: 2px solid ${blueColor};
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
    border-bottom: 3px solid ${blueColor};
    &:hover,
    &:focus {
      border: 2px solid ${blueColor};
    }
  }
`;

const ContactElement = styled(Element)`
  background-color: ${primaryBgColor};
`;

const ContactBox = styled(Box)`
  align-content: baseline;
  @media (max-width: 768px) {
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    padding-right:8%;
    width: 50%;
  }
`;

const ContactInfoBox = styled(Box)`
&&{
  display: grid;
  align-content: baseline;
  @media (max-width: 768px) {
    padding-top:10%;
    margin:0%;
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
}
`;

const MessageButton = styled(Button)`
  && {
    padding: 8px 0px;
    color: ${whiteColor};
    background-color: ${blueColor};
    font-family: ${myFont};
    width: 40%;
    font-size: 20px;
    text-transform: capitalize;
    @media (max-width: 425px) {
      font-size: 16px !important;
    }
  }
`;

const ContactHeading = styled(MyText)`
  && {
    display: flex;
    text-align: left;
    @media (max-width: 375px) {
      font-size: 3rem !important;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      font-size: 3rem !important;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
      font-size: 4.2rem !important;
    }
    @media (min-width: 1440px) {
      font-size: 5rem !important;
    }
  }
`;
