import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { thumbnail_image, image, title, artist, url } = props.album;
  const { thumbnailStyle, thumbnailContainerStyle, textContainer, albumTitle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
        </View>
        <View style={textContainer}>
          <Text style={albumTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle}/>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy now</Button>
      </CardSection>
    </Card>
  );
}  

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  albumTitle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
