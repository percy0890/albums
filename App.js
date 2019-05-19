/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Header from './src/components/Header';
import { View } from 'react-native';
import AlbumList from './src/components/AlbumList';


const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
)

export default App;