import React from 'react';
import styled from 'styled-components';

const TopBarStyle = styled.div`
  height: 125px;
  background: black;
  color: white;
`;

const TopBar = () => {
    return (
        <TopBarStyle>
          <span>        
            <h1 style={{margin: 0 + 'px'}}>Myth Arcanum</h1>    
          </span>
        </ TopBarStyle>
    )
}

export default TopBar;