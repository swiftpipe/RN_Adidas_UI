/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './src/MainScreen';
import {Colors} from './src/Colors';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.main}}>
        <MainScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
