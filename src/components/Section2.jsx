import styled from 'styled-components';
import { motion } from 'framer-motion';

const items = [
  { type: 'title', content: 'Leverage your data for high impact AI Projects' },
  {
    type: 'desc',
    content: `Data is the most valuable asset companies have, but only if it's put to use. Create real impact AI projects with your own data, integrated with your own product.`,
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

export default function Section2() {
  return (
    <Section2Container>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          custom={idx}
        >
          {item.type === 'title' && (
            <Section2Title>{item.content}</Section2Title>
          )}
          {item.type === 'desc' && (
            <Section2Description>{item.content}</Section2Description>
          )}
        </motion.div>
      ))}
      <MotionChartImage
        src="/assets/chart3d.png"
        alt="3D Chart"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
      />
    </Section2Container>
  );
}

const Section2Container = styled.section`
  padding: 32px 8px 32px 8px;
  background: #111;
  text-align: center;
  margin-bottom: 0;
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

const Section2Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto 32px auto;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 0 8px; // Additional padding for text
  }
  @media (max-width: 400px) {
    padding: 0 12px; // More padding for very small screens
  }
`;

const ChartImage = styled.img`
  display: block;
  margin: 32px auto 0 auto;
  max-width: 350px;
  width: 100%;
  height: auto;
  @media (min-width: 800px) {
    max-width: 420px;
  }
`;

const MotionChartImage = motion(ChartImage);
