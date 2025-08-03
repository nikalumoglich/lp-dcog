import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.4, 0.2, 0.2, 1],
    },
  }),
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 800);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function Jobs() {
  const isMobile = useIsMobile();
  const flowItems = [
    '7+ years of experience developing high traffic web applications',
    'Proficiency with docker and kubernetes',
    'Experience writing unit tests',
    'Familiarity with at least one backend development language, like Java or PHP',
    'Strong skills with React',
  ];

  const motionProps = (delay) =>
    !isMobile
      ? {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true, amount: 0.5 },
          variants: fadeVariants,
          custom: delay,
        }
      : {
          initial: 'hidden',
          animate: 'visible',
          variants: fadeVariants,
          custom: delay,
        };

  return (
    <PageContainer>
      <motion.div {...motionProps(0.1)}>
        <Navbar />
      </motion.div>
      <motion.div {...motionProps(0.4)}>
        <Section>
          <Title>Fullstack Software Engineer</Title>
          <Description>
            We’re looking for an experienced jack-of-all-trades, comfortable
            with backend and frontend development, and willing to be part of an
            A+ team for whom software engineering is an art form.
          </Description>
        </Section>
      </motion.div>
      <motion.div {...motionProps(0.7)}>
        <FlowchartSection>
          <FlowchartTitle>What we’re looking for:</FlowchartTitle>
          <FlowchartList>
            {flowItems.map((item, idx) => (
              <motion.li
                {...motionProps(1.0 + idx * 0.18)}
                key={item}
                style={{ listStyle: 'none' }}
              >
                <FlowchartItem>{item}</FlowchartItem>
              </motion.li>
            ))}
          </FlowchartList>
        </FlowchartSection>
      </motion.div>
      <motion.div {...motionProps(1.5)}>
        <Section2>
          <Section2Title>Why us?</Section2Title>
          <JobDescription>
            We believe that we can change the world by tackling difficult
            problems, and we’ll learn a lot during the process. We value
            excellence over velocity and we do not fear hard tasks. We believe
            in building a great team before processes and bureaucracy.
          </JobDescription>
        </Section2>
      </motion.div>
      <ConnectionImage src="/assets/conection.png" alt="Connection" />
      <motion.div {...motionProps(1.8)}>
        <Footer />
      </motion.div>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #111;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  margin-top: 40px;
  background: #111;
  color: #eee;
  padding: 32px 8px 32px 8px;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
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

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  margin-bottom: 16px;
  max-width: 600px;
  text-align: center;
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

const FlowchartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 16px 8px 16px 8px;
  @media (max-width: 500px) {
    padding: 16px 16px 16px 16px; // Increased lateral padding
  }
  @media (max-width: 400px) {
    padding: 16px 20px 16px 20px; // Even more padding for very small screens
  }
`;

const FlowchartTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: center;
`;

const FlowchartList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FlowchartItem = styled.li`
  background: #232222;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  min-width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 32px 8px 32px 8px;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  @media (max-width: 500px) {
    padding: 32px 16px 32px 16px; // Increased lateral padding
  }
  @media (max-width: 400px) {
    padding: 32px 20px 32px 20px; // Even more padding for very small screens
  }
`;

const Section2Title = styled.h2`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-bottom: 16px;
  font-weight: 700;
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const JobTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const JobDescription = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  margin-bottom: 16px;
  max-width: 600px;
  text-align: center;
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

const SectionSubtitle = styled.h3`
  color: #bdbdbd;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 18px 0 10px 0;
`;

const ConnectionImage = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  max-width: 320px;
  width: 100%;
  height: auto;
  @media (min-width: 800px) {
    max-width: 420px;
  }
`;
