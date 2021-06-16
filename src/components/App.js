import React from 'react';
import Header from './Header';
import SodaControl from './SodaControl';
import styled from 'styled-components';
// import background from "../../public/jarritos-mexican-soda-3fUD9LN1CL4-unsplash.jpg";
// import background from "./../img/jarritos-mexican-soda-3fUD9LNlCL4-unsplash.jpg"

const MainBody = styled.section`
  margin-left: 10%;
  margin-right: 10%;
`;

function App() {
  return (
    <React.Fragment>
      {/* <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + './../img/jarritos-mexican-soda-3fUD9LNlCL4-unsplash.jpg'})` }}> */}
      <Header />
      
      
      <MainBody>
      <SodaControl />
      </MainBody>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
