import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSflygCdBazGWPSnszjs8k7D4-AZcluAFYXAcQbiJNkFkatGZg/viewform?usp=dialog';

const items = [
  { type: 'title', content: 'Predict Campaign Performance' },
  {
    type: 'desc',
    content:
      'Quickly generate, deploy and integrate custom machine learning AI models that predict your campaigns performance.',
  },
  { type: 'button', content: 'Get in touch!' },
  { type: 'subtitle', content: 'What we do:' },
  {
    type: 'desc2',
    content:
      'We train and deploy campaign performance prediction machine learning models. Unleash the hidden power of your data.',
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
            {item.type === 'button' && <JoinButton to={formUrl}>GET IN TOUCH!</JoinButton>}
            {item.type === 'subtitle' && <Subtitle>{item.content}</Subtitle>}
            {item.type === 'desc2' && <Description>{item.content}</Description>}
          </motion.div>
        ))}
      </Content>
    </SectionContainer>
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
  margin-top: 120px;
  @media (min-width: 600px) {
    margin-top: -50px;
  }
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  @media (max-width: 500px) {
    padding: 16px 16px 16px 16px; // Increased lateral padding
    margin-top: 24px;
  }
  @media (max-width: 400px) {
    padding: 16px 20px 16px 20px; // Even more padding for very small screens
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
  @media (max-width: 500px) {
    max-width: calc(100vw - 32px); // Account for padding
    width: 100%;
    overflow-x: hidden;
  }
  @media (max-width: 400px) {
    max-width: calc(100vw - 40px); // Account for increased padding
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
  margin-top: 120px;
  color: #eee;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  margin-bottom: 24px;
  margin-bottom: 36px;
  padding-top: 40px;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    overflow-x: hidden;
    word-break: break-word;
    padding: 0 8px; // Additional padding for text
  }
  @media (max-width: 400px) {
    padding: 0 12px; // More padding for very small screens
  }
`;

const JoinButton = styled(Link)`
  position: relative;
  background: linear-gradient(0deg, #f4f4f4 0%, #696363 100%);
  top: 50px;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 16px 72px;
  font-size: 1.1rem;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: filter 0.2s, transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
    padding: 16px 72px;
  }
`;
