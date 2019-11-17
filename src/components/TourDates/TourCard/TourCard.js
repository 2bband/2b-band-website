import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  show: PropTypes.shape({
    location: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

const TourCard = ({ show }) => {
  const { location, city, date, description } = show;

  return (
    <Wrapper>
      <Date>
        <p>{date}</p>
      </Date>
      <TourInfo>
        <p>{`${location} - ${city} (${description})`}</p>
      </TourInfo>
    </Wrapper>
  );
};

TourCard.propTypes = propTypes;

export default TourCard;

const Date = styled.div``;
const TourInfo = styled.div``;

const Wrapper = styled.article`
  border: 1px dashed ${({ theme }) => theme.grey[500]};
  display: block;
  text-align: left;
  padding: 1rem;
  margin: 1rem auto;
  width: 90vw;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
`;
