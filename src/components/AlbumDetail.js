import React from 'react';
import { View, Text } from 'react-native';
import Card from './card';

const AlbumDetail = (props) => (
  <Card>
    <Text>{props.album.title}</Text>
  </Card>
);

export default AlbumDetail;
