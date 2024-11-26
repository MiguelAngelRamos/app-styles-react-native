import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, Image } from 'react-native';
import { fetchCharacters } from '@/api/rickAndMortyApi'; // Importa la función desde la API centralizada
import { ICharacter } from '@/api/interfaces/ICharacter';
import { Link } from 'expo-router';

const CharactersScreen = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]); // Tipo explícito
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters(); // Llama a la función de la API
        setCharacters(data); // Almacena los personajes
      } catch (error) {
        console.error('Error al cargar los personajes:', error);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="flex-1 px-4 bg-gray-100">
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg shadow-md p-4 mt-4">
            <Image
              source={{ uri: item.image }}
              className="w-full h-40 rounded-md"
              resizeMode="cover"
            />
            <Text className="text-lg font-bold mt-2">{item.name}</Text>
            <Text className="text-gray-500">{item.species}</Text>
            <View className="flex flex-row justify-between items-center mt-4">
              <Text className="text-sm text-gray-400">{item.status}</Text>
              <Link
                href={`/drawer/tabs/(navigator)/personajes/${item.id}`}
                className="text-blue-500"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CharactersScreen;