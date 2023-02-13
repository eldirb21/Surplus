import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/nav/main';

const App = props => {
  return (
    <NavigationContainer>
      <Main {...props} />
    </NavigationContainer>
  );
};

export default App;
