import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Colors, IconButton} from 'react-native-paper';

import {RouteNames} from 'src/navigation/types';
import {AlbumsScreen} from 'src/screens/HomeScreen/AlbumsScreen';
import {AppsScreen} from 'src/screens/HomeScreen/AppsScreen';
import {MoviesScreen} from 'src/screens/HomeScreen/MoviesScreen';

export const HomeBottomTabsNavigator = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <HomeBottomTabsNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarStyle: {height: 70},
      }}>
      <HomeBottomTabsNavigator.Screen
        component={AppsScreen}
        options={{
          title: 'App Store Apps',
          tabBarLabel: 'Apps',
          tabBarIcon: () => {
            return <IconButton icon="apple" color={Colors.red500} size={30} />;
          },
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 5,
          },
        }}
        name={RouteNames.music}
      />
      <HomeBottomTabsNavigator.Screen
        component={AlbumsScreen}
        options={{
          title: 'Albums',
          tabBarLabel: 'Albums',
          tabBarIcon: () => {
            return <IconButton icon="album" color={Colors.red500} size={30} />;
          },
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 5,
          },
        }}
        name={RouteNames.albums}
      />
      <HomeBottomTabsNavigator.Screen
        component={MoviesScreen}
        options={{
          title: 'Movies',
          tabBarLabel: 'Movies',
          tabBarIcon: () => {
            return (
              <IconButton icon="filmstrip" color={Colors.red500} size={30} />
            );
          },
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 5,
          },
        }}
        name={RouteNames.movies}
      />
    </HomeBottomTabsNavigator.Navigator>
  );
}
