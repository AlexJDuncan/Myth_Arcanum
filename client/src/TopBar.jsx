import React from 'react';
import styled from 'styled-components';
import FinalFantasy from './fonts/FinalFantasy-aa4m.ttf'

const TopBarStyle = styled.div`
  height: 125px;
  background: black;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const TopBar = () => {
    return (
        <TopBarStyle>       
            <Title>Myth Arcanum</Title>    
        </ TopBarStyle>
    )
}

export default TopBar;