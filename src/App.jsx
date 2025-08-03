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
      {/* Conteúdo da vaga abaixo da Section2 */}
      <JobSection id="jobs">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariants}
          custom={0.1}
        >
          <JobTitle>Fullstack Software Engineer</JobTitle>
          <JobDescription>
            We’re looking for an experienced jack-of-all-trades, comfortable
            with backend and frontend development, and willing to be part of an
            A+ team for whom software engineering is an art form.
          </JobDescription>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariants}
          custom={0.4}
        >
          <JobSubtitle className="flowchart">
            What we’re looking for:
          </JobSubtitle>
          <JobList>
            {flowItems.map((item, idx) => (
              <motion.li
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeVariants}
                custom={0.6 + idx * 0.18}
                style={{ listStyle: 'none' }}
              >
                <JobListItem>{item}</JobListItem>
              </motion.li>
            ))}
          </JobList>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariants}
          custom={1.2}
        >
          <JobSubtitle className="whyus">Why us?</JobSubtitle>
          <JobDescription>
            We believe that we can change the world by tackling difficult
            problems, and we’ll learn a lot during the process. We value
            excellence over velocity and we do not fear hard tasks. We believe
            in building a great team before processes and bureaucracy.
          </JobDescription>
        </motion.div>
      </JobSection>
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
            With an exceptionally talented team that boasts a proven track record of delivering successful projects 
            across a wide range of industries, we are confident in our ability to reshape the AI landscape. 
            Our mission is to develop and provide cutting-edge, powerful tools that empower companies to seamlessly transition 
            into the AI era. By combining innovation, expertise, and a deep understanding of market needs, we aim to enable 
            organizations to implement truly impactful projects that drive measurable results, 
            foster growth, and unlock unprecedented opportunities in the evolving world of artificial intelligence.
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
  margin: 68px auto -40px auto;
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

const JobSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 48px 8px 48px 8px;
  max-width: 700px;
  width: 100%;
  margin: -45px auto 0 auto;
`;

const JobTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #e0e0e0 0%, #8a8a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent !important;
  background-clip: text;
  color: transparent !important;
  width: 100%;
  display: inline-block;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
`;

const JobDescription = styled.p`
  color: #8a8a8a;
  font-size: 1.1rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 18px;
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 0 8px; // Additional padding for text
  }
  @media (max-width: 400px) {
    padding: 0 12px; // More padding for very small screens
  }
`;

const JobSubtitle = styled.h3`
  color: #bdbdbd;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 18px 0 10px 0;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }

  &.whyus {
    margin-top: 48px;
    color: #eee;
  }
  &.flowchart {
    margin-top: 48px;
  }
`;

const JobList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0 0 18px 0;
`;

const JobListItem = styled.li`
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
