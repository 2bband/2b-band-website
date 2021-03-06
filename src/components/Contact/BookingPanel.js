import React from "react";
import styled from "styled-components";
import { StyledFrame } from "./../../styles/StyledComponents";
import { StyledTitle } from "./../../styles/StyledComponents";

const BookingPanel = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Booking</h2>
      </Title>
      <p>040 509 891</p>
      <p>2bband.si@gmail.com</p>
    </Wrapper>
  );
};

export default BookingPanel;

const Title = styled(StyledTitle)``;

const Wrapper = styled(StyledFrame)``;
