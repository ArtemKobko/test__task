import styled from 'styled-components';
import { onMobile, onLaptop } from '../styles/mixins';

 const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 45px;

  ${onLaptop(`  
    justify-content: center;
  `)}
  
   ${onMobile(`
    flex-direction: column;
    align-items: center;
    gap: 25px;
  `)}
`;
export default Wrapper