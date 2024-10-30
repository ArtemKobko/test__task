import styled from 'styled-components';
import { colors } from '../styles/variables';
import MainContainer from './MainContainer';
import { onMobile, onSmallMobile } from '../styles/mixins';
import logo from '../assets/images/logo.png';
import ProfileImage from '../assets/images/profile.png';
import ArrowDownIcon from '../assets/svg/arrow_down.svg';
import NotificationIcon from '../assets/svg/notification.svg';
import MediumIcon from '../assets/svg/medium.svg';
import ShareIcon from '../assets/svg/share.svg';
import PlusIcon from '../assets/svg/plus.svg';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: ${colors.white};
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  margin-top: 0;
  align-self: stretch;
  display: flex;
  align-items: center;

  ${onMobile(`
    align-self: flex-start;
    margin-top: 5px;
  `)}
`;

const LogoImage = styled.img`
  width: 50px;
  height: 23px;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 17px;

  ${onMobile(`  
    flex-direction: column;
  `)}
`;

const Profile = styled.div`
  margin-bottom: 0;
  display: flex;
  align-items: center;

  ${onMobile(`
    margin-bottom: 10px;
  `)}
`;

const UserName = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.textPrimary};
`;

const ProfileImg = styled.img`
  margin-right: 7px;
  border-radius: 50%;
`;

const ArrowDown = styled.button`
  background: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Notification = styled.button`
  background: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Share = styled(Notification)``;

const Medium = styled(Notification)``;

const Navigation = styled.div`
  position: relative;
`;

const Links = styled.ul`
  display: flex;
  gap: 36px;
  margin-bottom: 23px;
`;

const Link = styled.li`
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => (props.$isActive ? colors.textPrimary : colors.textLight)};
  font-weight: 600;
  position: relative;

  &::after {
    content: ${(props) => (props.$isActive ? "''" : "none")};
    display: block;
    height: 4px;
    width: 100%;
    background: ${colors.gradient};
    position: absolute;
    bottom: -23px;
  }
`;

const AddButton = styled.button`
  width: 64px;
  height: 64px;
  bottom: 0;
  border-radius: 50%;
  border: none;
  transform: translateY(50%);
  background: ${colors.gradient};
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    scale: 1.05;
  }

  ${onMobile(`
    width: 50px;
    height: 50px;
    &:hover {
      scale: 1;
    }
  `)}

  ${onSmallMobile(`
    width: 40px;
    height: 40px;
    right: -10px;
  `)}
`;


const Header = () => {
  const [activeLink, setActiveLink] = useState('FEED');
  const links = [
    { id: 1, label: 'FEED' },
    { id: 2, label: 'EXPLORE' },
    { id: 3, label: 'DISCUSSIONS' },
  ];

  const handleTabClick = (link) => {
    setActiveLink(link);
  };

  return (
    <HeaderContainer>
      <MainContainer>
        <Content>
          <TopSection>
            <Logo href="#">
              <LogoImage src={logo} alt="logo" />
            </Logo>
            <ProfileSection>
              <Profile>
                <UserName>Arthur Wood</UserName>
                <ProfileImg src={ProfileImage} alt="Profile" />
                <ArrowDown><img src={ArrowDownIcon} alt="Arrow down"/></ArrowDown>
              </Profile>
              <Buttons>
                <Notification>
                  <img src={NotificationIcon} alt="Notifications" />
                </Notification>
                <Share>
                  <img src={ShareIcon} alt="Share" />
                </Share>
                <Medium>
                  <img src={MediumIcon} alt="Medium" />
                </Medium>
              </Buttons>
            </ProfileSection>
          </TopSection>
          <Navigation>
            <Links>
              {links.map((link) => (
                <Link
                  key={link.id}
                  $isActive={activeLink === link.label}
                  onClick={() => handleTabClick(link.label)}
                >
                  {link.label}
                </Link>
              ))}
            </Links>
            <AddButton ><img src={PlusIcon} alt="Plus" /></AddButton>
          </Navigation>
        </Content>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;
