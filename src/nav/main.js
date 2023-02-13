import React from 'react';
import {dataMain, dataTab} from './dataMain';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainTabSurplus from '../components/molecules/main-tabsurplus';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataMain.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MainTabSurplus {...props} />}>
      {dataTab.map((x, i) => (
        <Tab.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Tab.Navigator>
  );
};
export {MainTab};
export default Main;
