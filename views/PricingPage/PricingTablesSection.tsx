import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard
          title="business"
          description="Give us a try for free"
          benefits={['1 Slack Workspace', 'Lexicon and Policy Engine', 'Reporting', 'Up to 5,000 employees']}
        >
          $2500<span>/month</span>
        </PricingCard>
        <PricingCard
          title="pro"
          description="Best for individual desginers"
          benefits={['Slack,Teams,Discord', 'Policy Marketplace', 'Alerts', 'Custom Data Libraries', 'Out-of-the-Box Data Libraries', 'Up to 10,000 employees']}
          isOutlined
        >
          $5000<span>/month</span>
        </PricingCard>
        <PricingCard
          title="enterprise"
          description="Get your team together"
          benefits={[
            'Everything in Pro',
            '10,000+ emplopyees'
          ]}
        >
          $8000<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
