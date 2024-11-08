import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './screens/FeedScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileScreen from './screens/ProfileScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageDetailsScreen from './screens/imageDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Profile Stack with newImageUri prop
function ProfileStack({newImageUri}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        options={{headerShown: false}} // Hide the header for the profile
      >
        {props => <ProfileScreen {...props} newImageUri={newImageUri} />}
      </Stack.Screen>
      <Stack.Screen
        name="ImageDetails"
        component={ImageDetailsScreen}
        options={{title: 'Image Details'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // State to store the new image URI
  const [newImageUri, setNewImageUri] = useState(null);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = 'home-outline';
            } else if (route.name === 'Create Post') {
              iconName = 'plus-box-outline';
            } else if (route.name === 'Profile') {
              iconName = 'account-outline';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#d6249f',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: 5,
          },
          headerShown: false, // Disable headers for tabs
        })}>
        <Tab.Screen name="Feed" component={FeedScreen} />

        {/* Pass setNewImageUri function to CreatePostScreen */}
        <Tab.Screen name="Create Post">
          {props => (
            <CreatePostScreen {...props} setNewImageUri={setNewImageUri} />
          )}
        </Tab.Screen>

        {/* Pass newImageUri to ProfileStack */}
        <Tab.Screen name="Profile">
          {props => <ProfileStack {...props} newImageUri={newImageUri} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
