import React, { memo, useEffect, useState } from "react";
import _ from "lodash";
// @ts-ignore
import RVerify from "rverify";
import {
  Container,
  Alert as MUI,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import Select, { components } from "react-select";

import {
  CountryCodeBox,
  CustomSeekingSelect,
  DropDownText,
  FirstContainer,
  FirstInputText,
  FlexBox,
  FullBox,
  Heading,
  HeadingBox,
  HeadingFlexBox,
  InputText,
  InputTextNumber,
  PDiv,
  RightBox,
  SelectOption,
  SendButton,
  UnderFlexBox,
  VerifyCapthaButton,
} from "./contact.styles";
import axios from "axios";

const Contact = memo(({ data, content, lang }: any) => {
  const [width, setWidth]: any = useState("lg");
  const [flow, setFlow]: any = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seeking, setSeeking] = useState(content?.options[0]);
  const [message, setMessage] = useState("");
  const [options, setCountList]: any = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    value: "",
    label: "",
    icon: "",
  });
  const countriesArray: any = [];

  const [send, setSend]: any = useState(); //when true, handle the popup
  const [warning, setWarning]: any = useState();
  const [warningMessage, setWarningMessage]: any = useState("");
  const [open, setOpen] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}(\\.[a-zA-Z]{1,3})?$",
      "i"
    );

    // Test email addresses
    const emailAddresses = [
      "example@email.com",
      "another.email@example.co.uk",
      "invalid-email",
      "name@example..com",
      "name@.com",
    ];

  }, []);
  useEffect(() => {
    onLoadSizeCheck();
    getCountriesList();

    function handleResize() {
      if (innerWidth > 1280) {
        setWidth("lg");
      } else if (innerWidth >= 940) {
        setWidth("md");
      } else if (innerWidth >= 600) {
        setWidth("sm");
      } else if (innerWidth < 600) {
        setWidth("mb");
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  function onLoadSizeCheck() {
    if (innerWidth > 1280) {
      setWidth("lg");
    } else if (innerWidth >= 940) {
      setWidth("md");
    } else if (innerWidth >= 600) {
      setWidth("sm");
    } else if (innerWidth < 600) {
      setWidth("mb");
    }
  }
  let updatedCountries;
  const getCountriesList = async () => {
    try {
      const list: any = await axios.get("https://restcountries.com/v2/all");
      updatedCountries = list?.data.map((count: any) => {
        const cd = {
          value: count.callingCodes[0],
          label: count.name,
          icon: count.flag,
        };
        return cd;
      });
      setCountList(updatedCountries);
    } catch (error) {
      console.log("ERROR IN FETCHING COUNTRIES")
    }
    // console.log(list.data);
  };

  const closePopup = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSend(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const checkFilled = (): boolean => {
    if (
      name != "" &&
      email != "" &&
      phoneNumber != "" &&
      seeking != "" &&
      seeking != "Choose An Option" &&
      message != "" &&
      captcha != null
    ) {
      return true;
    } else return false;
  };

  const handlePhoneNumberChange = (event: any) => {
    const inputPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    const truncatedPhoneNumber = formattedPhoneNumber.slice(0, 11); // Limit input to 10 digits and 3 spaces
    setPhoneNumber(truncatedPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber: any) => {
    // Remove any non-digit characters from the input
    const digitsOnly = phoneNumber.replace(/\D/g, "");
    // Apply the formatting
    let formattedPhoneNumber = digitsOnly.slice(0, 3);
    if (digitsOnly.length > 3) {
      formattedPhoneNumber += " " + digitsOnly.slice(3);
    }
    return formattedPhoneNumber;
  };

  const settingCode = (e: any) => {
    setCode(e.value);
    // console.log("CountryCodeValueNew", e.value);
    setInputValue(e.value);
  };

  const search = _.debounce(
    (value: any) => // console.log("CountryCodeValue", value),
      1000
  );
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    search(inputValue);

    return () => search.cancel();
  }, [inputValue]);

  const submitForm = (event: any) => {
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}(\\.[a-zA-Z]{1,3})?$",
      "i"
    );

    if (checkFilled() == true) {
      if (!emailRegex.test(email)) {
        setWarningMessage("Email Is Not In The Correct Format");
        setWarning(true);
        setSend(false);
        return;
      }
      const location = window.location.host;
      const protocol = window.location.protocol;
      // sendEmail(name, email, code + phoneNumber, seeking, message, location, protocol);
      // setTimeout(() => {
      //   setSend(true);
      //   setName("");
      //   setCaptcha(null);
      //   setEmail("");
      //   setCode("+1");
      //   setPhoneNumber("");
      //   setSeeking("Metaverse Development");
      //   setMessage("");
      // }, 0.5);
    } else {
      setWarningMessage(content?.correct);
      setWarning(true);
      setSend(false);
    }
  };
  const { Option, SingleValue } = components;
  const IconOption = (props: any) => (
    <Option {...props} style={{ display: "flex" }}>
      <img src={props.data.icon} style={{ width: 25 }} alt={props.data.label} />
      <div>{props.data.label}</div>
    </Option>
  );

  // @ts-ignore
  const ComSingleValue = ({ children, ...props }) => (
    // @ts-ignore
    <SingleValue {...props}>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <img
          src={selectedCountry.icon}
          style={{ width: 35 }}
          alt={selectedCountry.label}
        />
        <div>{selectedCountry.value}</div>
      </div>
    </SingleValue>
  );
  useEffect(() => {
    // console.log("UseEffect Contact");
  }, []);
  return (
    <PDiv>
      <FullBox className="parent" id="contact">
        <Container maxWidth={width}>
          <HeadingBox>
            <HeadingFlexBox>
              <Heading variant="h3">{content?.title}</Heading>
              <Heading variant="h3">{content?.subtitle}</Heading>
            </HeadingFlexBox>
            <FlexBox>
              <UnderFlexBox>
                <RightBox>
                  <FirstContainer>
                    <FirstInputText
                      lang={lang}
                      inputProps={{ style: { height: "25px" } }}
                      id="filled-basic"
                      placeholder={content?.name}
                      value={name}
                      onChange={(event: any) => {
                        setName(event?.target.value);
                      }}
                    />
                  </FirstContainer>
                  <InputText
                    inputProps={{ style: { height: "25px" }, maxLength: 40 }}
                    id="filled-basic"
                    placeholder={content?.email}
                    value={email}
                    onChange={(event: any) => {
                      setEmail(event?.target.value);
                    }}
                    lang={lang}
                  />
                  <CountryCodeBox>
                    <Select
                      id="country"
                      name="country"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          height: "100%",
                          width: "100%",
                          color: "black",
                          backgroundColor: "transparent",
                        }),
                      }}
                      components={{
                        Option: IconOption,
                        SingleValue: ComSingleValue,
                      }}
                      options={options}
                      onChange={(value: any) => {
                        // console.log("ReactValue", value);
                        setSelectedCountry(value);
                        setCode(value.value);
                      }}
                    />

                    <InputTextNumber
                      value={phoneNumber}
                      onChange={(event: any) => {
                        handlePhoneNumberChange(event);
                      }}
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        style: { height: "14px" },
                        minLength: 11,
                      }}
                      id="filled-basic"
                      placeholder="000-000-000"
                      lang={lang}
                    />
                  </CountryCodeBox>
                  <FormControl fullWidth>
                    <CustomSeekingSelect
                      defaultValue="Metaverse Development"
                      value={seeking}
                      onChange={(event: any) => {
                        setSeeking(event?.target.value);
                      }}
                      onClick={(event: any) => {
                        setFlow(!flow);
                      }}
                      lang={lang}
                    >
                      {content?.options?.map((option: any) => (
                        <SelectOption key={option} value={option}>
                          {option}
                        </SelectOption>
                      ))}
                    </CustomSeekingSelect>
                  </FormControl>
                  <Snackbar
                    open={send}
                    autoHideDuration={3000}
                    onClose={() => setSend(false)}
                  >
                    <Alert
                      onClose={() => {
                        setSend(false);
                        setWarningMessage("");
                      }}
                      severity={"success"}
                      sx={{ width: "100%" }}
                    >
                      {content?.send}
                    </Alert>
                  </Snackbar>

                  <Snackbar
                    open={warning}
                    autoHideDuration={3000}
                    onClose={() => setWarning(false)}
                  >
                    <Alert
                      onClose={() => setWarning(false)}
                      severity={"error"}
                      sx={{ width: "100%" }}
                    >
                      {warningMessage}
                    </Alert>
                  </Snackbar>
                </RightBox>
              </UnderFlexBox>
              <DropDownText
                multiline
                rows={4}
                id="filled-basic"
                placeholder={content?.message}
                value={message}
                onChange={(event: any) => {
                  setMessage(event?.target.value);
                }}
                lang={lang}
              />
              {/* <ReCaptching
                sitekey="6Lc6jxgoAAAAAE_orn2HHSGkBKleK_QwUISs44tf"
                onChange={(val: any) => setCaptcha(val)}
              /> */}
              <VerifyCapthaButton
                lang={lang}
                variant={"contained"}
                onClick={
                  captcha !== 1
                    ? (event: any) => {
                      document.getElementsByTagName(
                        "body"
                      )[0].style.overflow = "hidden";
                      RVerify.configure({
                        maskClosable: false,
                        title: "Authentication",
                        text: "Drag the slider to make the image correct way up.",
                        width: "560px",
                        album: [
                          "https://narsun.s3.eu-central-1.amazonaws.com/Narsun+Captcha+Image.webp",
                        ],
                      });
                      RVerify.action(function (res: any) {
                        // console.log("ResponseIS", res);
                        document.getElementsByTagName(
                          "body"
                        )[0].style.overflow = "unset";
                        if (res === 0 || res === 2) {
                          setCaptcha(null);
                        } else {
                          setCaptcha(res);
                        }
                      });
                    }
                    : undefined
                }
                disableElevation
              >
                {captcha !== 1 ? (
                  <div
                    style={{ display: "flex", gap: 5, alignItems: "center" }}
                  >
                    <img
                      src="https://narsun.s3.eu-central-1.amazonaws.com/Checkbox+Blank.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div>{content?.robot}</div>
                  </div>
                ) : (
                  <div
                    style={{ display: "flex", gap: 5, alignItems: "center" }}
                  >
                    <img
                      src="https://narsun.s3.eu-central-1.amazonaws.com/Check+Box+Ticked.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div>{content?.verified}</div>
                  </div>
                )}
              </VerifyCapthaButton>

              <SendButton
                variant={"contained"}
                onClick={(event: any) => submitForm(event)}
                disableElevation
              >
                {content?.btn}
              </SendButton>
            </FlexBox>
          </HeadingBox>
        </Container>
      </FullBox>
    </PDiv>
  );
});
export default Contact;
