import React from 'react';
import Header from './Header';
import SodaControl from './SodaControl';
import styled from 'styled-components';

const MainBody = styled.section`
  margin-left: 10%;
  margin-right: 10%;`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBody>
      <SodaControl />
      </MainBody>
    </React.Fragment>
  );
}

export default App;
