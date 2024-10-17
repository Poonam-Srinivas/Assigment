import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreatePostScreen = ({navigation, setNewImageUri}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to pick an image from the library
  const selectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
    });

    if (!result.didCancel && result.assets.length > 0) {
      setSelectedImage(result.assets[0]); // Save the selected image
    }
  };

  // Validate form inputs before submitting
  const validateForm = () => {
    if (!title || !description || !selectedImage) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmitPost = () => {
    if (validateForm()) {
      // Pass the selected image URI to the App component
      setNewImageUri(selectedImage.uri);

      // Navigate to the Profile screen after the post is created
      navigation.navigate('Profile');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter post title"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter post description"
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        {selectedImage ? (
          <Image source={{uri: selectedImage.uri}} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Icon name="camera-plus-outline" size={40} color="#d6249f" />
            <Text style={styles.imageText}>Select an image</Text>
          </View>
        )}
      </TouchableOpacity>

      <Button title="Submit Post" onPress={handleSubmitPost} color="#d6249f" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  imageText: {
    marginTop: 8,
    fontSize: 16,
    color: '#d6249f',
  },
});

export default CreatePostScreen;
