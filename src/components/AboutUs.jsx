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
            With an exceptionally talented team that boasts a proven track record of delivering successful projects 
            across a wide range of industries, we are confident in our ability to reshape the AI landscape. 
            Our mission is to develop and provide cutting-edge, powerful tools that empower companies to seamlessly transition 
            into the AI era. By combining innovation, expertise, and a deep understanding of market needs, we aim to enable 
            organizations to implement truly impactful projects that drive measurable results, 
            foster growth, and unlock unprecedented opportunities in the evolving world of artificial intelligence.
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
`;
