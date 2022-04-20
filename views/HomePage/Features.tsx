import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Unified View.',
    description:
      'Centralize data insights and findings across collaboration applications into a single view.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Minimize False Positives.',
    description:
      'Identify trending topics by application, users, and location, with built-in alerts, audit trail, and robust reporting.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Act.',
    description:
      'Pinpoint areas of improvement and measure progress over time to enhance your company\'s performance and risk mitigation.',
  }
];

export default function Features() {
  return (
    <Container>
      <Content>
        <OverTitle>features</OverTitle>
        <SectionTitle>What are you signing up for?</SectionTitle>
      </Content>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin-top: 50px;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
