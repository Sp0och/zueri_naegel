import React from "react";
import styled from "styled-components";
import BG_image from "../../assets/booking_BG.jpg";
import Calendar from "react-calendar";
import { useState } from "react";
import Calendar2 from "./Calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 141px);
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CalendarContainer = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 20%;
  border: 2px solid black;
  overflow: hidden;
  .react-calendar {
    padding: 10px;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const Booking = () => {
  // set initial date to today
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Image src={BG_image} />
      <Text>Current Set date: {date.toString()}</Text>
      <CalendarContainer>
        <Calendar onChange={setDate} value={date} />
      </CalendarContainer>
      <CalendarContainer style={{ left: "70%" }}>
        <Calendar2 />
      </CalendarContainer>
    </Container>
  );
};

export default Booking;
