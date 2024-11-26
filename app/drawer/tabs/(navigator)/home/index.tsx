import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonCustom from '@/components/shared/ButtonCustom'
import { Link, router } from 'expo-router'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        {/* <Link href="/profile">Profile</Link> */}
        <ButtonCustom
          onPress={() => router.push('/drawer/tabs/characters')}
          className="mb-10"
          color="secondary"
        >Characteres
        </ButtonCustom>

        <ButtonCustom
          onPress={() => router.push('/drawer/tabs/personajes')}
          className="mb-10"
          color="secondary"
        >Personajes
        </ButtonCustom>

        <ButtonCustom
          onPress={() => router.push('/drawer/tabs/profile')}
          className="mb-10"
          color="primary"
        >Perfil
        </ButtonCustom>

        <ButtonCustom
          onPress={() => router.push('/drawer/tabs/profile')}
          color="primary"
          variant='text-only'
        > Home
        </ButtonCustom>
     
      </View>
    </SafeAreaView>

  )
}

export default HomeScreen;