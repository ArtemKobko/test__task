import styled from 'styled-components';
import { onTablet, onMobile } from '../styles/mixins';

const Container = styled.div`
  margin: 0 auto;
  padding: 24px 130px 0;
  max-width: 1440px;

   ${onMobile(`
    padding: 24px 20px 0;
  `)}

  ${onTablet(`
    padding: 24px 40px 0;
  `)}
`;

export default Container