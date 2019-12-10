import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import TourCard from "./TourCard";
import SectionTitle from "../Common/SectionTitle";

const getTourDates = graphql`
  {
    allShows: allContentfulKoncert(sort: { fields: date, order: ASC }) {
      edges {
        node {
          id: contentful_id
          city
          venue
          date(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`;

const TourDates = () => {
  const { allShows } = useStaticQuery(getTourDates);

  return (
    <Wrapper>
      <SectionTitle title="koncerti" />
      <TourDatesGrid>
        {allShows.edges.map(({ node }) => {
          return <TourCard key={node.id} show={node} />;
        })}
      </TourDatesGrid>
    </Wrapper>
  );
};

export default TourDates;

const TourDatesGrid = styled.div``;

const Wrapper = styled.section`
  padding: 4rem 0;
  text-align: center;
  min-height: 100vh;

  ${TourDatesGrid} {
    display: grid;
    margin: 0 auto;
    width: 90vw;
    grid-gap: 2rem;
  }

  @media (min-width: 576px) {
    ${TourDatesGrid} {
      width: 70vw;
    }
  }

  @media (min-width: 900px) {
    ${TourDatesGrid} {
      width: 60vw;
    }
  }

  @media (min-width: 2000px) {
    ${TourDatesGrid} {
      width: 50vw;
    }
  }
`;
