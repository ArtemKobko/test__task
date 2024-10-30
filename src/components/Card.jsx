import styled from 'styled-components';
import { colors } from '../styles/variables';
import Play from '../assets/svg/play.svg';
import Like from '../assets/svg/like.svg';
import LinkIcon from '../assets/svg/link.svg'; 

const CardContainer = styled.article`
  box-sizing: border-box;
  padding: 24px;
  max-width: 374px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const CardTitle = styled.h3`
  margin-top: auto;
  margin-bottom: 44px;
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  text-align: left;
  max-width: 320px;
  color: ${colors.textSecondary};
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardAuthor = styled.a`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;
    background: #b2b3bb;
  }
`;

const CardShared = styled.a`
  font-size: 16px;
  line-height: 18px;
  color: ${colors.textSecondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 16px;
    line-height: 16px;
    color: ${colors.textSecondary};
    background: #ecf1f8;
    font-weight: 600;
  }
`;

const CardSharedWeblink = styled(CardShared)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'OpenSans';
  font-size: 14px;
  line-height: 16px;
  color: ${colors.textSecondary};
  font-weight: 600;
`;

const CardView = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardLike = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Svg = styled.img`
  width: 16px;  
  height: 16px; 
`;

const SvgIcon = ({ src, alt }) => <Svg src={src} alt={alt} />;

const Card = ({ title, author, plays, likes, share, isLink }) => {
  return (
    <CardContainer>
      {share && !isLink && (
        <CardShared href="#">
          Shared to <span>{share}</span>
        </CardShared>
      )}
      {isLink && (
        <CardSharedWeblink href="#">
          <SvgIcon src={LinkIcon} alt="Link icon" />
          Shared via weblink
        </CardSharedWeblink>
      )}
      
      <CardTitle>{title}</CardTitle>

      <CardBottom>
        <CardAuthor href="#">{author}</CardAuthor>
        {(plays || likes) && (
          <CardStats>
            {plays && <CardView><SvgIcon src={Play} alt="Play icon" />{plays}</CardView>}
            {likes && <CardLike><SvgIcon src={Like} alt="Like icon" />{likes}</CardLike>}
          </CardStats>
        )}
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
