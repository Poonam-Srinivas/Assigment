import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const gridImages = [
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
  username: 'JohnDoe',
  bio: 'Traveler | Photographer | Tech Enthusiast',
  profilePicture: 'https://i.pravatar.cc/300',
  followers: 1234,
  posts: 56,
};

export default function ProfileScreen() {
  const {width} = Dimensions.get('window');
  const numColumns = 3;
  const imageSize = width / numColumns - 20;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: userProfile.profilePicture}}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>{userProfile.username}</Text>
          <Text>{userProfile.bio}</Text>
          <Text>{userProfile.followers} Followers</Text>
          <Text>{userProfile.posts} Posts</Text>
        </View>
      </View>

      <FlatList
        data={gridImages}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[styles.postImage, {width: imageSize, height: imageSize}]}
          />
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
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  postImage: {
    margin: 5,
    backgroundColor: '#f0f0f0',
  },
});
