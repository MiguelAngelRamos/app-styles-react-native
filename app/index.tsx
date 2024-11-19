import { Text, SafeAreaView } from 'react-native';
import React from 'react';


const App = () => {
  return (
    <SafeAreaView>
      <Text className="text-5xl font-rale-black">React Native</Text>
      <Text className="text-4xl font-rale-medium">React Native</Text>
      <Text className="text-3xl font-rale-light">React Native</Text>
    </SafeAreaView>
  )

  // 'rale-black': ['Raleway-Black', 'sans-serif'],
  // 'rale-light': ['Raleway-Light', 'sans-serif'],
  // 'rale-medium': ['Raleway-Medium', 'sans-serif'],
}

export default App;