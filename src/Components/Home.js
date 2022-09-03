import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online For Touchless Delivery '
        backgroundImg='model-s.jpg'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online For Touchless Delivery '
        backgroundImg='model-y.jpg'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online For Touchless Delivery '
        backgroundImg='model-x.jpg'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online For Touchless Delivery '
        backgroundImg='model-3.jpg'
        leftBtnTxt='Custom Order'
        rightBtnTxt='Existing Inventory'
      />

      <Section
        title='Lowest Cost Solar Panel'
        description=' Money-Back Guarantee '
        backgroundImg='solar-panel.jpg'
        leftBtnTxt='Order Now'
        rightBtnTxt=' Learn More'
      />

      <Section
        title='Solar for New Roofs'
        description=' Solar roofs Cost Less than a new roof than '
        backgroundImg='solar-roof.jpg'
        leftBtnTxt='Order Now'
        rightBtnTxt=' Learn More'
      />
      <Section
        title='Accessories'
        description='  '
        backgroundImg='accessories.jpg'
        leftBtnTxt='Shop Now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
