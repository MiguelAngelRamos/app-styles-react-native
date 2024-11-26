import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { fetchCharacterById } from '@/api/rickAndMortyApi';
import { ICharacter } from '@/api/interfaces/ICharacter';

const CharacterDetailScreen = () => {
  const { id } = useLocalSearchParams(); // Captura el ID desde la URL
  const [character, setCharacter] = useState<ICharacter | null>(null); // Tipo explícito
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterById(id as string); // Llama a la función de la API
        setCharacter(data); // Almacena los detalles del personaje
      } catch (error) {
        console.error('Error al cargar el personaje:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) getCharacter(); // Solo ejecuta si hay un ID válido
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!character) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-xl font-bold">No se encontró el personaje</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 items-center px-5 py-10">
      <Image
        source={{ uri: character.image }}
        className="w-40 h-40 rounded-full"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold mt-4">{character.name}</Text>
      <Text className="text-lg text-gray-600 mt-2">{character.species}</Text>
      <Text className="text-lg text-gray-600">{character.status}</Text>
      <Text className="text-lg text-gray-600">{character.gender}</Text>
      <Text className="text-lg text-gray-600">
        Origen: {character.origin.name}
      </Text>
    </View>
  );
};

export default CharacterDetailScreen;