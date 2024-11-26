import { View, Text } from 'react-native';
import React from 'react';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
    <Drawer.Screen
        name="tabs" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Tabs',
          title: 'Tabs-Stacks',
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'User Screen',
        }}
      />
      <Drawer.Screen
        name="settings/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Settings',
          title: 'Settings Screen',
        }}
      />
  </Drawer>
  )
}

export default DrawerLayout;