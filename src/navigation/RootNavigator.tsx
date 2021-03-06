import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteNames} from 'src/navigation/types';
import AppScreen from 'src/screens/AppScreen';
import {HomeScreen} from 'src/screens/HomeScreen';
import NuteScreen from 'src/screens/NuteScreen';

export const RootStackNavigator = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        name={RouteNames.home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStackNavigator.Screen
        name={RouteNames.app}
        component={AppScreen}
        options={{
          headerShown: true,
        }}
      />
      <RootStackNavigator.Screen
        name={RouteNames.nute}
        component={NuteScreen}
        options={{
          headerShown: true,
        }}
      />
    </RootStackNavigator.Navigator>
  );
};
