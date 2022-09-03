import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
function Section({
  title,
  description,
  leftBtnTxt,
  rightBtnTxt,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnTxt}</LeftButton>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </ButtonGroup>

          <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between; // for vertical
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 12px;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
