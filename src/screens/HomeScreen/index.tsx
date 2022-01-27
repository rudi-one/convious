import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Colors, IconButton} from 'react-native-paper';

import {RouteNames} from 'src/navigation/types';
import {AppsScreen} from 'src/screens/HomeScreen/AppsScreen';
import CreditsScreen from 'src/screens/HomeScreen/CreditsScreen';
import {MusicScreen} from 'src/screens/HomeScreen/MusicScreen';
import {isIOS} from 'src/utils/consts';
import {verticalScale} from 'src/utils/helpers';

export const HomeBottomTabsNavigator = createBottomTabNavigator();

const tabBarLabelStyle = {
  fontSize: 14,
  paddingBottom: verticalScale(8),
};

export function HomeScreen() {
  return (
    <HomeBottomTabsNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarStyle: {height: isIOS ? 95 : 80},
      }}>
      <HomeBottomTabsNavigator.Screen
        component={AppsScreen}
        options={{
          title: 'App Store Apps',
          tabBarLabel: 'Apps',
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="apple"
                color={focused ? Colors.red500 : Colors.grey700}
                size={26}
              />
            );
          },
          tabBarLabelStyle: tabBarLabelStyle,
        }}
        name={RouteNames.apps}
      />
      <HomeBottomTabsNavigator.Screen
        component={MusicScreen}
        options={{
          title: 'Music',
          tabBarLabel: 'Music',
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="music-note"
                color={focused ? Colors.red500 : Colors.grey700}
                size={26}
              />
            );
          },
          tabBarLabelStyle: tabBarLabelStyle,
        }}
        name={RouteNames.music}
      />
      <HomeBottomTabsNavigator.Screen
        component={CreditsScreen}
        options={{
          title: 'Credits',
          tabBarLabel: 'Credits',
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="account-check"
                color={focused ? Colors.red500 : Colors.grey700}
                size={26}
              />
            );
          },
          tabBarLabelStyle: tabBarLabelStyle,
        }}
        name={RouteNames.credits}
      />
    </HomeBottomTabsNavigator.Navigator>
  );
}
