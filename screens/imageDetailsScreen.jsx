import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export default function ImageDetailsScreen({route}) {
  const {imageUrl} = route.params;
  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageUrl}}
        style={[styles.image, {width, height: width}]}
      />
      <Text style={styles.imageDetails}>Image Details for: {imageUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
  },
  imageDetails: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
