import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { personajes } from '@/api/personajes';

const CharactersScreen = () => {
  return (
      <View className="flex flex-1 px-4">
        <FlatList 
          data={personajes}
          keyExtractor={(personaje) => personaje.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.nombre}</Text>
            </View>
          )}
        />
      </View>
  
  )
}

export default CharactersScreen;