import React, {useState} from 'react';
import {View, TextInput, Button, Image, Text, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const selectedImage = response.assets[0].uri;
        setPhoto(selectedImage);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Select Image" onPress={selectImage} />
      {photo && <Image source={{uri: photo}} style={styles.image} />}
      <Button title="Submit" onPress={() => console.log('Post Submitted')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 12,
  },
});
