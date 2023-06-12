import { FlatList, StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeView = ({ navigation }) => {
  const views = [{ title: 'Listar Personajes', path: 'personajes' },]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (

    <ImageBackground source={{ uri: 'https://mexmads.com/wp-content/uploads/2023/04/9ef0c5f0c07b4f32a73e8bcd3d9420e0.webp' }} style={styles.backgroundImage}>
      <FlatList data={views} renderItem={renderItem} />
    </ImageBackground>
  )
}

export default HomeView

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'relative',
  }
})