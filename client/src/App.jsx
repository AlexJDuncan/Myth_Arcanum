import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import TopBar from './TopBar';
import FontStyles from './fontStyles';


const AppStyle = styled.div`
  height: 100%;
  text-align: center;
`;

const App = () => {
    return(
        <AppStyle>
          <FontStyles />
          <TopBar />
          <Home />
        </ AppStyle>
    )
}

export default App;