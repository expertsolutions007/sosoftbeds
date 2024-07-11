import { useEffect, useState } from "react";
import {
  PModal,
  PButton,
  PCont,
  PDiv,
  PImage,
  PLeft,
  PRight,
  XImage,
  PHead,
  PBlue,
  PBoxing,
  PDescription,
  MXImage,
} from "../../../styles/home.styles";
import { useRouter } from "next/router";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    image: "",
    location: "",
    heading: "",
    startDate: "",
    endDate: "",
    date: "",
    description: "",
  });
  const data = [
    {
      image: "",
      location: "Cityscape Global",
      heading: "Narsun Studios is coming to Cityscape Global from",
      startDate: "2023-09-10",
      endDate: "2023-09-12",
      date: "September 10-12",
      description:
        "Get ready to learn, network, and collaborate at Cityscape Global! Meet our team for some great discussions and networking opportunities.",
    },
    {
      image: "",
      location: "Boston",
      heading: "Narsun Studios is heading to Boston from",
      startDate: "2023-09-20",
      endDate: "2023-09-28",
      date: "September 24th-28th",
      description:
        "Join us during this time to connect with our team for engaging discussions and valuable networking opportunities.",
    },
    {
      image: "",
      location: "Las Vegas",
      heading: "Narsun Studios is in Las Vegas from",
      startDate: "2023-10-03",
      date: "October 7th-12th",
      endDate: "2023-10-12",
      description:
        "Join us to discover the future of innovation in the heart of Las Vegas with engaging discussions and valuable networking opportunities.",
    },
    {
      image: "",
      location: "Los Angeles",
      heading: "Narsun Studios is coming to Los Angeles from",
      startDate: "2023-09-25",
      date: "September 29th - October 6th",
      endDate: "2023-10-06",
      description:
        "Join us to discover the future of innovation in the heart of Las Vegas with engaging discussions and valuable networking opportunities.",
    },
  ];

  useEffect(() => {
    // Function to check if a date is within the range of start and end dates
    function isDateInRange(date: any, startDate: any, endDate: any) {
      const currentDate = new Date(date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return currentDate >= start && currentDate <= end;
    }

    // Get the current date
    const currentDate = new Date();

    // Find the first matching event
    const matchingEvent = data.find((event) => {
     
      return isDateInRange(currentDate, event.startDate, event.endDate);
    });

    if (matchingEvent) {
      // @ts-ignore
      setCurrentEvent(matchingEvent);
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
  

  return (
    <PModal
      open={showPopup}
      onClose={closePopup}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PDiv>
        <PCont>
          <PLeft>
            <MXImage
              src="https://narsun.s3.eu-central-1.amazonaws.com/Group+1.png"
              onClick={closePopup}
            />
            <PImage
              src="https://narsun.s3.eu-central-1.amazonaws.com/Vector+1.png"
              sx={{
                objectFit: "fill !important",
              }}
            />
          </PLeft>
          <PRight>
            <XImage
              src="https://narsun.s3.eu-central-1.amazonaws.com/Group+1.png"
              onClick={closePopup}
            />
            <PBoxing>
              <PHead>
                {currentEvent.heading}
                <PBlue>{currentEvent.date}</PBlue>
              </PHead>
            </PBoxing>
            <PBoxing>
              <PDescription>{currentEvent.description}</PDescription>
            </PBoxing>
            <PBoxing>
              <PButton
                formTarget="_blank"
                // @ts-ignore
                target="_blank"
                href="https://calendly.com/ayesha-ahmed-zl0"
              >
                Lets Meet!
              </PButton>
            </PBoxing>
          </PRight>
        </PCont>
      </PDiv>
    </PModal>
  );
}
