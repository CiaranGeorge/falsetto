import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import { Transition } from 'react-transition-group';
import BasicSection from 'components/BasicSection';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <VideoContainer>
      <Transition in={true} timeout={1000} appear={true}>
        <video style={{width: "100vw"}}
          src="/type-vid.mp4"
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop 
        >
          </video>
      </Transition>
      <CustomContainer>
        <Content>
          <Heading>falsetto<Suffix>.ai</Suffix></Heading>
          <SectionTitle>A 10x Force Multiplier for Collaboration Application Compliance</SectionTitle>
          <Description>falsetto.ai provides a unified view of collaboration applications running across your enterprise, surfacing real-time trends and insights on who needs coaching and what skills need to be developed. </Description>
        </Content>
      </CustomContainer>
    </VideoContainer>
  );
}

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  display: none;

  ${media('<=desktop')} {
    font-size: 1.5rem;
    display: block;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgba(var(--text));
  text-shadow: -1px 1px 3px #676767;
  ${media('<=desktop')} {
    display: block;
    text-shadow: none;
  }
`;

const CustomContainer = styled(Container)`
  position: absolute;
  max-width: 100%;
  padding: 0 10%;
  ${media('<=desktop')} {
    position: relative;
    padding: 6rem 2rem 0 2rem;
  }
`;

const Suffix = styled.span`
  color: rgba(var(--primary));
`;