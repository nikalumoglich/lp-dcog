import styled from 'styled-components';
import { motion } from 'framer-motion';

const items = [
  { type: 'box', content: 'Upload your anonymized data' },
  { type: 'arrow', content: '→' },
  { type: 'box', content: 'Train your model' },
  { type: 'arrow', content: '→' },
  { type: 'box', content: 'Run inference through an easy to use REST API' },
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

export default function Flowchart() {
  return (
    <FlowchartContainer>
      <FlowList>
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            custom={idx}
            style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
          >
            {item.type === 'box' ? (
              <FlowItem>{item.content}</FlowItem>
            ) : (
              <ArrowBetween>{item.content}</ArrowBetween>
            )}
          </motion.li>
        ))}
      </FlowList>
    </FlowchartContainer>
  );
}

const FlowchartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  padding: 16px 48px 15px 48px;
  @media (min-width: 800px) {
    padding-top: 32px;
    padding-bottom: 15px;
  }
  @media (max-width: 500px) {
    padding: 16px 24px 15px 24px; // Reduced lateral padding for small screens
  }
  @media (max-width: 400px) {
    padding: 16px 16px 15px 16px; // Even smaller padding for very small screens
  }
`;

const FlowList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // Allow items to wrap
  gap: 12px;
  align-items: center;
  justify-content: center; // Center items when wrapped
  @media (max-width: 500px) {
    flex-direction: column; // Stack items vertically on small screens
    gap: 8px; // Smaller gap for vertical layout
  }
`;

const FlowItem = styled.div`
  background: #222;
  color: #fff;
  padding: 12px 16px; // Back to original padding
  border-radius: 8px;
  font-size: 0.95rem; // Back to original font size
  font-weight: 500;
  min-width: 120px; // Back to original min-width
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; // Center text horizontally
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
  @media (max-width: 500px) {
    min-width: 220px; // Wider for vertical layout
    max-width: 300px; // Increased maximum width
    font-size: 0.95rem; // Slightly larger font for better readability
    padding: 14px 18px; // Increased padding for mobile
  }
  @media (max-width: 400px) {
    min-width: 200px; // Slightly smaller for very small screens
    max-width: 280px; // Increased maximum width
    font-size: 0.9rem; // Slightly larger font
    padding: 12px 16px; // Increased padding
  }
`;

const ArrowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 2px;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    transform: rotate(90deg); // Rotate arrow to point downward
    font-size: 1.2rem; // Slightly smaller arrow for mobile
  }
`;
