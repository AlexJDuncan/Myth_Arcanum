import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import TopBar from './TopBar';

const AppStyle = styled.div`
  height: 100%;
`;

const App = () => {
    return(
        <AppStyle>
          <TopBar />
          <Home />
        </ AppStyle>
    )
}

export default App;