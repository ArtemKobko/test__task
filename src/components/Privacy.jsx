import{ useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import { onMobile } from '../styles/mixins';

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 24px;
  gap: 20px;
  padding-top: 72px;

  ${onMobile(`
    padding-top: 15px;
    justify-content: center;
  `)}
`;

const PrivacyText = styled.span`
  font-size: 16px;
  line-height: 18px;
  color: ${colors.textSecondary};
`;

const SwitchWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  background-color: ${colors.red};
  width: 40px;
  height: 24px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${colors.red};
`;

const SwitchCircle = styled.span`
  content: '';
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${colors.white};
  top: 50%;
  left: ${(props) => (props.$isActive ? 'auto' : '3px')};
  right: ${(props) => (props.$isActive ? '3px' : 'auto')};
  transform: translateY(-50%);
  transition: all 0.3s ease;
`;

 const PrivacyToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <PrivacyContainer>
      <PrivacyText>Public</PrivacyText>
      <SwitchWrapper onClick={handleToggle} $isActive={isActive}>
        <SwitchCircle $isActive={isActive} />
      </SwitchWrapper>
      <PrivacyText>Private</PrivacyText>
    </PrivacyContainer>
  );
};

export default PrivacyToggle;