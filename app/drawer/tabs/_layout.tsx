import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(navigator)"
        options={{
          title: 'Stack'
        }}
      />

      <Tabs.Screen
       name="calendar/index"
       options={{
        title: 'Calendar'
      }}
      />
   
      <Tabs.Screen
        name="version/index"
        options={{
            title: 'Version'
        }}
      />
      
    </Tabs>
  )
}

export default TabsLayout;