import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
const initialGridImages = [
  'https://images.pexels.com/photos/27938575/pexels-photo-27938575/free-photo-of-wind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/17286179/pexels-photo-17286179/free-photo-of-a-cup-of-coffee-and-lavender-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28665518/pexels-photo-28665518/free-photo-of-modern-train-station-architecture-in-hamburg.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/18760208/pexels-photo-18760208/free-photo-of-leaves-on-the-birch-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28494944/pexels-photo-28494944/free-photo-of-creative-portrait-with-mirror-reflection-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28859391/pexels-photo-28859391/free-photo-of-elegant-table-setting-with-soft-pink-touches.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28704749/pexels-photo-28704749/free-photo-of-cozy-matcha-latte-with-autumn-decor-on-rustic-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/20465554/pexels-photo-20465554/free-photo-of-close-up-of-a-canon-slr-camera-sitting-on-a-tree-stump.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/12679386/pexels-photo-12679386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28766049/pexels-photo-28766049/free-photo-of-healthy-oatmeal-breakfast-with-fresh-blueberries.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/19025446/pexels-photo-19025446/free-photo-of-aerial-view-of-autumnal-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28368989/pexels-photo-28368989/free-photo-of-a-woman-with-long-hair-and-brown-eyes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/28784083/pexels-photo-28784083/free-photo-of-abstract-close-up-of-dried-wheat-stalks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
];

const userProfile = {
  username: 'Wiley Vanissa',
  bio: 'Traveler | Photographer | Tech Enthusiast',
  profilePicture:
    'https://images.pexels.com/photos/6076013/pexels-photo-6076013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  followers: 1328,
  following: 567,
  posts: 56,
};

export default function ProfileScreen({route, newImageUri}) {
  const {width} = Dimensions.get('window');
  const numColumns = 3;
  const imageSize = width / numColumns - 2;
  const [gridImages, setGridImages] = useState(initialGridImages);
  const navigation = useNavigation(); // Use navigation

  // Check for newImageUri in route.params and update the gridImages array
  useEffect(() => {
    if (route.params?.newImageUri) {
      setGridImages(prevImages => [route.params.newImageUri, ...prevImages]);
    }
  }, [route.params?.newImageUri]);

  useEffect(() => {
    if (newImageUri) {
      setGridImages([newImageUri, ...gridImages]);
    }
  }, [newImageUri]);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{uri: userProfile.profilePicture}}
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{gridImages.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userProfile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userProfile.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Username and Bio */}
      <View style={styles.profileDetails}>
        <Text style={styles.username}>{userProfile.username}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Grid of Posts */}
      <FlatList
        data={gridImages}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ImageDetails', {imageUrl: item})
            } // Navigate on press
          >
            <Image
              source={{uri: item}}
              style={[styles.postImage, {width: imageSize, height: imageSize}]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        contentContainerStyle={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  profileDetails: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
  },
  editProfileButton: {
    marginHorizontal: 15,
    marginBottom: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  editProfileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    margin: 1,
  },
});
