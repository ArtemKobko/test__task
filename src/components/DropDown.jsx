import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import { onMobile } from '../styles/mixins';
import ReportIcon from '../assets/svg/report.svg';
import DeleteIcon from '../assets/svg/delete.svg';
import Dots from '../assets/svg/dots.svg';

const DropdownContainer = styled.div`
  position: relative;
  display: block;
`;

const DropdownButton = styled.img`
    cursor: pointer;
    width: 16px;
    height: 16px;
`;

const DropdownMenu = styled.ul`
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  width: 172px;
  height: 124px;
  position: absolute;
  top: 50px;
  left: -1px; 
  background-color: ${colors.white};
  list-style: none;
  border-radius: 8px;
  padding: 24px 0;
  margin: 0;
  opacity: 0.9;


  ${onMobile(`
      left: -160px;
      top: 30px;
  `)}
`;

const DropdownItem = styled.li`
  padding: 8px 0px 8px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 16px;
  color: ${colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color: ${colors.background};
  }
`;

const Svg = styled.img`
  width: 20px;
  height: 20px;
`;

 const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownContainer className="dropdown">
      <DropdownButton onClick={handleDropdown} src={Dots} alt="Dropdown toggle" />
      <DropdownMenu $isActive={isActive}>
        <DropdownItem ><Svg src={ReportIcon}/>Report User</DropdownItem>
        <DropdownItem ><Svg src={DeleteIcon}/> Block User</DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};
export default Dropdown;