import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PersonajeComponent = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Text style={styles.text}>Nombre: {item.personaje}</Text>
      <Text style={styles.text}>Apodo: {item.apodo}</Text>
      <Text style={styles.text}>Casa de Hogwarts: {item.casaDeHogwarts}</Text>
      <Text style={styles.text}>Interpretado por: {item.interpretado_por}</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleDelete} style={styles.button}>
          <Text style={styles.buttonText}>Eliminar</Text>
          <Icon name="trash" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>


  );
};

export default PersonajeComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'red',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
  },
});

