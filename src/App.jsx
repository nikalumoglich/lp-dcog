import Flowchart from './components/Flowchart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

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

const flowItems = [
  '7+ years of experience developing high traffic web applications',
  'Proficiency with docker and kubernetes',
  'Experience writing unit tests',
  'Familiarity with at least one backend development language, like Java or PHP',
  'Strong skills with React',
];

const aboutSectionVariants = {
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

export default function App() {
  useEffect(() => {
    function scrollToHashSection() {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);
    return () => window.removeEventListener('hashchange', scrollToHashSection);
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <LogoImage src="/assets/logo_dcog.png" alt="Logo" />
      <Section />
      <MotionBrainImage
        src="/assets/brain.png"
        alt="Brain"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
      />
      <Flowchart />
      <Section2 />
      <MotionConnectionImage
        src="/assets/conection.png"
        alt="Connection"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
      />
      <AboutSection id="aboutus">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={aboutSectionVariants}
          custom={0.2}
        >
        <AboutTitle>About Us</AboutTitle>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={aboutSectionVariants}
          custom={0.6}
        >
          <AboutDescription>
            At dcog.ai, we empower digital marketing teams with the next generation of artificial intelligence. Our mission is to help agencies and brands unlock the full potential of their data by designing, training, and deploying custom AI models that drive smarter decisions, sharper targeting, and faster results.
We specialize in creating AI systems tailored for the dynamic world of digital marketing, from predictive customer behavior models and personalized content engines to automated campaign optimization and sentiment analysis.
Our team combines expertise in machine learning, data science, and marketing strategy to bridge the gap between cutting-edge AI research and real-world marketing performance. Whether you’re looking to enhance your analytics stack or build proprietary AI tools, we provide the technical foundation and strategic insight to make it happen.
          </AboutDescription>
        </motion.div>
      </AboutSection>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  display: block;
  padding-top: 140px;
  margin: 68px auto ;
  max-width: 300px;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    max-width: 180px;
  }
`;

const BrainImage = styled.img`
  display: block;
  margin: -40px auto 35px auto;
  max-width: 350px;
  width: 100%;
  height: auto;
  @media (min-width: 800px) {
    max-width: 420px;
  }
`;

const MotionBrainImage = motion(BrainImage);

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 48px 8px 48px 8px;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 48px 16px 48px 16px; // Increased lateral padding
  }
  @media (max-width: 400px) {
    padding: 48px 20px 48px 20px; // Even more padding for very small screens
  }
`;

const AboutTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const AboutDescription = styled.p`
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

const ConnectionImage = styled.img`
  display: block;
  margin: -12px auto 0 auto;
  max-width: 320px;
  width: 100%;
  height: auto;
  @media (min-width: 800px) {
    max-width: 420px;
  }
`;
const MotionConnectionImage = motion(ConnectionImage);
