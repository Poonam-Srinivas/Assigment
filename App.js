import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/FeedScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileScreen from './screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

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
          headerShown: false,
        })}>
        <Tab.Screen name="Feed" component={FeedScreen} />

        {/* Pass setNewImageUri function to CreatePostScreen */}
        <Tab.Screen name="Create Post">
          {props => (
            <CreatePostScreen {...props} setNewImageUri={setNewImageUri} />
          )}
        </Tab.Screen>

        {/* Pass newImageUri to ProfileScreen */}
        <Tab.Screen name="Profile">
          {props => <ProfileScreen {...props} newImageUri={newImageUri} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
