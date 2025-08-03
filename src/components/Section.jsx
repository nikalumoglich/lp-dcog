import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const items = [
  { type: 'title', content: 'Machine Learning Made Easy' },
  {
    type: 'desc',
    content:
      'Quickly generate, deploy and integrate custom machine learning AI models trained on your data.',
  },
  { type: 'button', content: 'JOIN WAITLIST' },
  { type: 'subtitle', content: 'What we do:' },
  {
    type: 'desc2',
    content:
      'We found out that training and deploying custom machine learning models that fit your necessities is difficult, so we automated it for you. Unleash the hidden power of your data.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.18,
      duration: 0.7,
      ease: [0.4, 0.2, 0.2, 1],
    },
  }),
};

export default function Section({ onAnimationComplete, id }) {
  return (
    <SectionContainer id={id}>
      <Content>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={idx}
            onAnimationComplete={
              idx === items.length - 1 ? onAnimationComplete : undefined
            }
          >
            {item.type === 'title' && <Title>{item.content}</Title>}
            {item.type === 'desc' && <Description>{item.content}</Description>}
            {item.type === 'button' && <JoinButtonComponent content={item.content}></JoinButtonComponent>}
            {item.type === 'subtitle' && <Subtitle>{item.content}</Subtitle>}
            {item.type === 'desc2' && <Description>{item.content}</Description>}
          </motion.div>
        ))}
      </Content>
    </SectionContainer>
  );
}

function JoinButtonComponent(content) {
  return (
    <JoinButton to="https://docs.google.com/forms/d/e/1FAIpQLSc-_lOd5n59aaTHMTg3xvu5KzhyG3qXcc0UwQMhoCu72jYIKg/viewform?usp=dialog">JOIN WAITLIST</JoinButton>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  background: #111;
  color: #eee;
  padding: 32px 8px 32px 8px;
  margin-top: -2px;
  @media (min-width: 600px) {
    margin-top: -50px;
  }
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  @media (max-width: 500px) {
    padding: 16px 2vw 16px 2vw;
    margin-top: 24px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
  @media (max-width: 500px) {
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 50px;
  background: linear-gradient(180deg, #e0e0e0 0%, #8a8a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent !important;
  background-clip: text;
  color: transparent !important;
  width: 100%;
  display: inline-block;
  text-align: center;
  white-space: normal;
  @media (min-width: 600px) {
    white-space: nowrap;
  }
  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
    margin-top: 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 32px 0 8px 0;
  color: #eee;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  margin-bottom: 16px;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
  @media (max-width: 500px) {
    max-width: 98vw;
    overflow-x: hidden;
    word-break: break-word;
  }
`;

const JoinButton = styled(Link)`
  background: linear-gradient(0deg, #f4f4f4 0%, #696363 100%);
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 12px 56px;
  font-size: 1.1rem;
  font-weight: 900;
  margin-top: 32px;
  margin-bottom: 24px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: filter 0.2s, transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
  @media (min-width: 800px) {
    font-size: 1.3rem;
    padding: 16px 72px;
  }
`;
