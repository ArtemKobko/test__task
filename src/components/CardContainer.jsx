import styled from 'styled-components';
import { onLaptop, onMobile } from '../styles/mixins';
 const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 24px;
  padding-bottom: 240px;
  padding-top: 60px;

  ${onLaptop(`
    display: flex;
    flex-direction: column;
  `)}

  ${onMobile(`
    padding-top: 40px;
    padding-bottom: 100px;
    width: 100%;
  `)}
`;

export default Content