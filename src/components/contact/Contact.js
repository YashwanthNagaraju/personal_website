import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Element } from "react-scroll";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";
import {
  MyText,
  blueColor,
  BottomContainer,
  whiteColor,
  myFont,
  LineDiv,
  blackTextColor,
  errorColor,
  successColor,
} from "../common/commonStyles";
import { useContext, useState } from "react";
import { apiKey } from "./model/emailKey";
import { ThemeContext } from "../../App";
import { Alert, Snackbar } from "@mui/material";
import { slideInRightWithBlur, slideOutRight } from "../common/animations";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState({
    msg: "",
    vertical: "bottom",
    horizontal: "right",
  });
  const [info, setInfo] = useState("");
  const { vertical, horizontal, msg } = status;

  function moveUp() {
    var ele = document.getElementById("effectDiv");
    ele.style.paddingBottom = "3%";
  }
  function moveDown() {
    var ele = document.getElementById("effectDiv");
    ele.style.paddingBottom = "0%";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailID) {
      setInfo("Enter your email ID to submit");
      moveUp();
      return setStatus({
        msg: "error",
        vertical: "bottom",
        horizontal: "right",
      });
    }
    if (!message) {
      setInfo("Enter a message to submit");
      moveUp();
      return setStatus({
        msg: "error",
        vertical: "bottom",
        horizontal: "right",
      });
    }
    try {
      var templateParams = {
        from_name: name,
        from_email: emailID,
        message: message,
      };
      emailjs
        .send(
          apiKey.SERVICE_ID,
          apiKey.TEMPLATE_ID,
          templateParams,
          apiKey.USER_ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setInfo("Message has been sent!");
          moveUp();
          setStatus({
            msg: "success",
            vertical: "bottom",
            horizontal: "right",
          });
        })
        .catch((err) => {
          setInfo("Something went wrong.");
          moveUp();
          return setStatus({
            msg: "error",
            vertical: "bottom",
            horizontal: "right",
          });
        });
    } catch {
      console.log("Something went wrongggg.");
    }
  }
  function handleClose(e) {
    if (e.reason === "clickaway") {
      moveDown();
      setStatus({ msg: "", vertical: "bottom", horizontal: "right" });
      return;
    }
    setInfo("");
    moveDown();
    setStatus({ msg: "", vertical: "bottom", horizontal: "right" });
  }
  console.log(!!msg);
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
              changeColor={theme}
              placeholder="Your Name"
              style={{}}
              onChange={(e) => setName(e.target.value)}
            />
            <StyleDiv />
            <HiddenLabel for="emailIdField">Email ID: </HiddenLabel>
            <InfoField
              id="emailIdField"
              type="text"
              changeColor={theme}
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
              changeColor={theme}
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
              test={theme}
            >
              Send Message
            </MessageButton>
            <InfoBar
              id="infoBar"
              anchorOrigin={{ vertical, horizontal }}
              open={msg !== ""}
              onClose={(e) => handleClose(e)}
              key={vertical + horizontal}
            >
              <Alert
                id="alertInfoBar"
                style={{
                  backgroundColor:
                    msg === "error"
                      ? errorColor
                      : msg === "success"
                      ? successColor
                      : "",
                  color: whiteColor,
                }}
                onClose={handleClose}
                severity={msg}
                sx={{ width: "100%" }}
              >
                {info}
              </Alert>
            </InfoBar>{" "}
          </ContactInfoBox>
        </ContactStack>
      </ContactContainer>
    </ContactElement>
  );
};

export default Contact;
const ContactElement = styled(Element)``;

const ContactContainer = styled(BottomContainer)`
  && {
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
    color: ${(props) =>
      props.changeColor === "dark" ? whiteColor : blackTextColor};
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
    color: ${(props) =>
      props.changeColor === "dark" ? whiteColor : blackTextColor};
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

const entryAnimation = css`
  ${slideInRightWithBlur} 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

const exitAnimation = css`
  ${slideOutRight} 12.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;
const InfoBar = styled(Snackbar)`
  -webkit-animation: ${(props) =>
    props.open ? entryAnimation : exitAnimation};
  animation: ${(props) => (props.open ? entryAnimation : exitAnimation)};
`;
