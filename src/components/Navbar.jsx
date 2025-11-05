import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600 && open) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <NavBarContainer $open={open}>
      <LogoArea
        as={Link}
        to="/"
        aria-label="Home"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
          setOpen(false);
        }}
        style={{ cursor: 'pointer' }}
      >
        <img
          src="/assets/logo_dcog.png"
          alt="Logo da DCOG"
          style={{ height: '44px', width: 'auto', display: 'block' }}
        />
      </LogoArea>
      <MenuLinks>
        <MenuItemLink href="/#aboutus">About Us</MenuItemLink>
      </MenuLinks>
      <MenuIconArea onClick={() => setOpen((v) => !v)}>
        <FaBars size={28} />
      </MenuIconArea>
      {open && (
        <DropdownMenu>
          <MenuItem
            href="/#aboutus"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setTimeout(() => {
                const el = document.getElementById('aboutus');
                if (el)
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          >
            About Us
          </MenuItem>
        </DropdownMenu>
      )}
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  background: #232222;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const LogoArea = styled.div`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  height: 48px;
  @media (max-width: 500px) {
    position: static;
    left: unset;
    transform: none;
    margin: 0;
    margin-left: 8px;
    height: 48px;
    display: flex;
    align-items: center;
  }
`;

const MenuIconArea = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;
  height: 48px;
  @media (min-width: 601px) {
    display: none;
  }
  @media (max-width: 500px) {
    position: absolute;
    right: 8px;
    top: 0;
    margin-left: 0;
    margin-right: 8px;
    padding: 6px;
    height: 48px;
    display: flex;
    align-items: center;
  }
`;

const MenuLinks = styled.div`
  display: none;
  gap: 24px;
  align-items: center;
  @media (min-width: 601px) {
    display: flex;
    margin-left: auto;
  }
`;

const MenuItemLink = styled.a`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s, transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  &:hover {
    background: #222;
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 48px;
  right: 8px;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  min-width: 120px;
  z-index: 100;
  padding: 8px 0;
  @media (max-width: 500px) {
    position: fixed;
    top: 48px;
    right: 8px;
    left: unset;
    width: 180px;
    min-width: 120px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    background: #232222;
    margin-top: 0;
    padding: 12px 0;
  }
`;

const MenuItem = styled.div`
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #333;
  }
`;
