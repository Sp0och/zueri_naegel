import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { colors } from "../../utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 600px;
  padding: 20px;
`;

const SwitchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  min-width: 100px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGrey};
  }
  i {
    font-size: 20px;
    color: ${colors.titleGrey};
  }
`;

const DateState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-width: 100px;
  text-align: center;
`;
const Month = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
`;

const Year = styled.p``;

const Weekdays = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
`;

const Weekday = styled.p`
  width: calc(100% / 7);
  font-size: 20px;
  padding: 15px 0;
  color: ${colors.grey};
  text-align: center;
`;

const Calendar2 = () => {
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const getWeekday = () => {
    const weekday = day;
    switch (weekday % 7) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Sunday";
    }
  };

  const getMonth = (monthNumber) => {
    switch (monthNumber) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "January";
    }
  };

  const yearBefore = () => {
    setYear(year - 1);
  };

  const yearAfter = () => {
    setYear(year + 1);
  };

  const monthBefore = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const monthAfter = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <Container>
      <SwitchBar>
        <SwitchButton onClick={() => yearBefore()}>
          <i className="fa-solid fa-angles-left"></i>
        </SwitchButton>
        <SwitchButton onClick={() => monthBefore()}>
          <i className="fa-solid fa-chevron-left" />
        </SwitchButton>
        <DateState>
          <Month>{getMonth(month)}</Month>
          <Year>
            {getWeekday()}, {day}. {month}. {year}
          </Year>
        </DateState>
        <SwitchButton onClick={() => monthAfter()}>
          <i className="fa-solid fa-chevron-right" />
        </SwitchButton>
        <SwitchButton onClick={() => yearAfter()}>
          <i className="fa-solid fa-angles-right"></i>
        </SwitchButton>
      </SwitchBar>

      <Weekdays>
        <Weekday>Mo</Weekday>
        <Weekday>Di</Weekday>
        <Weekday>Mi</Weekday>
        <Weekday>Do</Weekday>
        <Weekday>Fr</Weekday>
        <Weekday>Sa</Weekday>
        <Weekday>So</Weekday>
      </Weekdays>
      <Weekday>So</Weekday>
    </Container>
  );
};

export default Calendar2;
