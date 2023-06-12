import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import PersonajeComponent from '../components/PersonajeComponent';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPersonajes();
  }, []);

  const fetchPersonajes = async () => {
    try {
      const response = await fetch("https://harry-potter-api.onrender.com/db");
      const data = await response.json();

      const filteredPersonajes = data.personajes.filter(
        (personaje) =>
          personaje.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setPersonajes(filteredPersonajes);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePersonaje = (id) => {
    const updatedPersonajes = personajes.filter(item => item.id !== id);
    setPersonajes(updatedPersonajes);
  };

  const renderItem = ({ item }) => (
    <PersonajeComponent item={item} onDelete={deletePersonaje} />
  );

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar personajes"
        onChangeText={handleSearch}
        value={searchTerm}
      />

      <FlatList
        data={personajes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Personajes;
