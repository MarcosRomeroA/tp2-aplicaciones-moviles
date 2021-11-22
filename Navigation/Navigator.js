import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { AnimeScreen } from '../screens/AnimeScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () =>  {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Buscar Anime" component={AnimeScreen} />
    </Drawer.Navigator>
  );
}
