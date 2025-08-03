import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>© dcog 2025</Copyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: #232222;
  padding: 10px 0 10px 0;
  text-align: center;
  width: 100vw;
  max-width: 100vw;
  left: 0;
  z-index: 10;
  position: static;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Copyright = styled.p`
  color: #eee;
  font-size: 0.95rem;
  margin: 0;
`;
