import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Swiper} from './Swiper'; // Make sure this path is correct for your Swiper component

const feedData = [
  {
    id: 1,
    name: 'John Doe',
    profileImage:
      'https://images.pexels.com/photos/5634776/pexels-photo-5634776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    arrayImage: [
      {
        id: 1,
        image:
          'https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        image:
          'https://images.pexels.com/photos/28206098/pexels-photo-28206098/free-photo-of-a-small-boat-with-a-green-canopy-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 3,
        image:
          'https://images.pexels.com/photos/18241047/pexels-photo-18241047/free-photo-of-yellow-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 4,
        image:
          'https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage:
      'https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    arrayImage: [
      {
        id: 1,
        image:
          'https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 2,
        image:
          'https://images.pexels.com/photos/28206098/pexels-photo-28206098/free-photo-of-a-small-boat-with-a-green-canopy-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 3,
        image:
          'https://images.pexels.com/photos/18241047/pexels-photo-18241047/free-photo-of-yellow-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 4,
        image:
          'https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  },
  {
    id: 3,
    name: 'Justin smith',
    profileImage:
      'https://images.pexels.com/photos/28266884/pexels-photo-28266884/free-photo-of-a-woman-with-her-eyes-closed-and-her-hands-on-her-face.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    arrayImage: [
      {
        id: 1,
        image:
          'https://images.pexels.com/photos/28763352/pexels-photo-28763352/free-photo-of-child-engaged-with-tablet-indoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 2,
        image:
          'https://videos.pexels.com/video-files/7063373/7063373-sd_360_640_24fps.mp4',
      },
      {
        id: 3,
        image:
          'https://images.pexels.com/photos/18241047/pexels-photo-18241047/free-photo-of-yellow-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 4,
        image:
          'https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  },
  {
    id: 4,
    name: 'George sean',
    profileImage:
      'https://images.pexels.com/photos/25695917/pexels-photo-25695917/free-photo-of-mother-holding-and-hugging-son-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    arrayImage: [
      {
        id: 1,
        image:
          'https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 2,
        image:
          'https://images.pexels.com/photos/28206098/pexels-photo-28206098/free-photo-of-a-small-boat-with-a-green-canopy-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 3,
        image:
          'https://images.pexels.com/photos/18241047/pexels-photo-18241047/free-photo-of-yellow-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 4,
        image:
          'https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  },
  {
    id: 5,
    name: 'Alex Matt',
    profileImage:
      'https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    arrayImage: [
      {
        id: 1,
        image:
          'https://images.pexels.com/photos/28238606/pexels-photo-28238606/free-photo-of-a-woman-in-a-white-dress-taking-a-picture-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 2,
        image:
          'https://images.pexels.com/photos/28206098/pexels-photo-28206098/free-photo-of-a-small-boat-with-a-green-canopy-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 3,
        image:
          'https://images.pexels.com/photos/18241047/pexels-photo-18241047/free-photo-of-yellow-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        id: 4,
        image:
          'https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  },
];
const {width} = Dimensions.get('window');

const FEED_PADDING = 10;

const Feed = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = id => {
    setLikedItems(prevLikedItems => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  const renderItem = ({item}) => (
    <View style={styles.feedItem}>
      <View style={styles.header}>
        <Image source={{uri: item.profileImage}} style={styles.profileImage} />
        <Text style={styles.name}>{item.name}</Text>
      </View>

      {/* Use the Swiper component to display the image carousel */}
      <Swiper
        images={item.arrayImage.map(imageObj => imageObj.image)}
        imageWidth={width - FEED_PADDING * 2}
        paginationDotStyle={styles.paginationDotStyle}
      />

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <AntDesign
            name={likedItems[item.id] ? 'heart' : 'hearto'}
            size={23}
            color={likedItems[item.id] ? '#FF0000' : '#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={feedData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  feedItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#FF0000',
  },
  paginationDotStyle: {
    backgroundColor: '#666',
    marginTop: 10,
    height: 6,
    width: 6,
  },
});

export default Feed;
