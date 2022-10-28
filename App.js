import React from 'react';

import { Dimensions, SafeAreaView } from 'react-native';

import Routes from './src/configuration/routes';

import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`

//  * {
//   box-sizing: : border-box;
//   margin: 0;
//  }
//  body {
//   color: red;
//   background: black;
//  }
// `

const App = () => {

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      {/* <GlobalStyle /> */}
      <Routes />
    </SafeAreaView>
  );
}

export default App;
