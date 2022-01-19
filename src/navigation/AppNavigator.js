import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import Playlist from "../screens/PlayList";
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AudioList" component={AudioList} options={{
          tabBarIcon: ({color, size}) => ( <Feather name="list" size={size} color={color} /> )
      }}/>
      <Tab.Screen name="Player" component={Player} options={{
          tabBarIcon: ({color, size}) => ( <MaterialCommunityIcons name="disc-player" size={size} color={color} /> )
      }}/>
      <Tab.Screen name="PlayList" component={Playlist} options={{
          tabBarIcon: ({color, size}) => ( <MaterialIcons name="playlist-play" size={size} color={color} /> )
      }}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
