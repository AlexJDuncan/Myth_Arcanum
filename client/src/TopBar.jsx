import React from 'react';
import styled from 'styled-components';
import FontStyles from './fontStyles';


const TopBarStyle = styled.div`
  height: 125px;
  background: black;
  color: white;
`;

const Title = styled.p`
  margin: 0;
  font-size: 3rem;
  font-family: Final Fantasy;
`;

const Links = styled.p`
  margin: 1rem;
  text-align: center;
  display: inline-block;
  font-size: 1.25rem;  
`;

const TopBar = () => {
    return (
        <TopBarStyle>
            <Title>Myth Arcanum</Title>
            <Links>Calendar</Links>
            <Links>Forum</Links>
            <Links>Contests</Links>  
        </ TopBarStyle>
    )
}

export default TopBar;