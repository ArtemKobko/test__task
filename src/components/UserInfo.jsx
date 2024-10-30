import styled from 'styled-components';
import { colors } from '../styles/variables';
import { onMobile } from '../styles/mixins';
import Avatar from '../assets/images/avatar.png';
import EditIcon from '../assets/svg/edit.svg';
import Dropdown from './DropDown';

const UserInfoContainer = styled.aside`
  padding-top: 72px;
`;

const UserInfoContent = styled.article`
  max-width: 350px;
`;

const UserInfoHeader = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 34px;
`;

const UserInfoImage = styled.img`
  width: 120px;
  height: 129px;
  border-radius: 50%;

  ${onMobile(`
      width: 60px;
      height: 60px;
  `)}
`;

const UserInfoHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  color: ${colors.textDarkGray};
  margin-bottom: 4px;

  ${onMobile(`
      margin-bottom: 8px;
  `)}
`;

const UserNick = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${colors.textDarkGray};

  ${onMobile(`
      margin-bottom: 16px;
  `)}
`;

const EditProfileLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.red};
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserStatistics = styled.ul`
  max-width: 286px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${colors.textDarkGray};
`;

const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #636363;
`;

const UserDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${colors.textSecondary};
`;

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserInfoContent>
        <UserInfoHeader>
          <UserInfoImage src={Avatar} alt="User avatar" />
          <UserInfoHeaderContent>
            <UserName>Benjamin Clementine</UserName>
            <UserNick>@benclementine</UserNick>
            <EditProfileLink href="#">
              <img src={EditIcon} alt="Edit icon" />
              Edit Profile
            </EditProfileLink>
          </UserInfoHeaderContent>
          <Dropdown />
        </UserInfoHeader>

        <UserStatistics>
          <StatItem>
            <StatNumber>45</StatNumber>
            <StatLabel>synths</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>110</StatNumber>
            <StatLabel>followers</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>322</StatNumber>
            <StatLabel>following</StatLabel>
          </StatItem>
        </UserStatistics>

        <UserDescription>
          Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin, and Ethereum.
        </UserDescription>
      </UserInfoContent>
    </UserInfoContainer>
  );
};

export default UserInfo;
