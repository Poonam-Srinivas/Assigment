import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const CreatePost = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [caption, setCaption] = useState('');

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.uri);
      }
    });
  };

  const handlePost = () => {
    console.log('Image URI:', imageUri);
    console.log('Caption:', caption);

    setImageUri(null);
    setCaption('');

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Post</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image Selector */}
        <TouchableOpacity onPress={selectImage} style={styles.imageSelector}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Select an image</Text>
          )}
        </TouchableOpacity>

        {/* Caption Input */}
        <TextInput
          style={styles.input}
          placeholder="Write a caption..."
          value={caption}
          onChangeText={setCaption}
          multiline
        />

        {/* Tagging Button */}
        <TouchableOpacity style={styles.tagButton}>
          <Text style={styles.tagButtonText}>Tag People</Text>
        </TouchableOpacity>

        {/* Post Button */}
        <TouchableOpacity
          style={[styles.postButton, !imageUri && styles.disabledButton]}
          onPress={handlePost}
          disabled={!imageUri}>
          <Text style={styles.postButtonText}>Share</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageSelector: {
    width: 350,
    height: 350,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    color: '#888',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  tagButton: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#efefef',
    alignItems: 'center',
    marginBottom: 20,
  },
  tagButtonText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postButton: {
    backgroundColor: '#3897f0',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#b0c4de',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePost;
