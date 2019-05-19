import React, { Component } from 'react';
import { View, Text } from 'react-native';

// making this component class based so that we can fetch data from api
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    )
  }
}

export default AlbumList;