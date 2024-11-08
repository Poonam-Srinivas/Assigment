import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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

export {initialGridImages, feedData};
