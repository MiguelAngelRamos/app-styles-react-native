import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonCustom from '@/components/shared/ButtonCustom'
import { Link } from 'expo-router'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/profile">Profile</Link>
        <ButtonCustom/>
        <ButtonCustom/>
        <ButtonCustom/>
      </View>
    </SafeAreaView>

  )
}

export default HomeScreen;