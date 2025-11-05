import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const sectionVariants = {
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

export default function AboutUs() {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0.2}
        >
          <Title>About Us</Title>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0.6}
        >
          <Description>
            At dcog.ai, we empower digital marketing teams with the next generation of artificial intelligence. Our mission is to help agencies and brands unlock the full potential of their data by designing, training, and deploying custom AI models that drive smarter decisions, sharper targeting, and faster results.
We specialize in creating AI systems tailored for the dynamic world of digital marketing, from predictive customer behavior models and personalized content engines to automated campaign optimization and sentiment analysis.
Our team combines expertise in machine learning, data science, and marketing strategy to bridge the gap between cutting-edge AI research and real-world marketing performance. Whether you’re looking to enhance your analytics stack or build proprietary AI tools, we provide the technical foundation and strategic insight to make it happen.
          </Description>
        </motion.div>
      </Content>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111;
  padding: 32px 8px 32px 8px;
  min-height: calc(100vh - 48px); /* 48px = altura do Footer */
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 32px 16px 32px 16px; // Increased lateral padding
  }
  @media (max-width: 400px) {
    padding: 32px 20px 32px 20px; // Even more padding for very small screens
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1.1rem;
  max-width: 600px;
  text-align: center;
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 0 8px; // Additional padding for text
  }
  @media (max-width: 400px) {
    padding: 0 12px; // More padding for very small screens
  }
`;
